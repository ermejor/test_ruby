require 'rest-client'

namespace :add_geo_data do
  desc "Obtiene los datos de geolocalización"
  task find_data: :environment do
    res = RestClient.get 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    if res.code == 200
      data = JSON.parse(res)
      pbar = ProgressBar.create(:title => "Procesando Datos", :starting_at => 0, :total => data['features'].length)
      @RowProcessed = 0
      data['features'].each do |feature|
        next if feature['properties']['title'] == nil || feature['properties']['url'] == nil || feature['properties']['place'] == nil
        @geo_datum = GeoDatum.new({id_geo: feature['id'], magnitude: feature['properties']['mag'],
                                  place:  feature['properties']['place'], time: feature['properties']['time'], url: feature['properties']['url'],
                                  tsumami: feature['properties']['tsunami'], magnitude_type: feature['properties']['magType'],
                                  title: feature['properties']['title'], longitude: feature['geometry']['coordinates'][0],
                                  latitude: feature['geometry']['coordinates'][1], type_m: feature['type']})
        begin
          @geo_datum.save
          pbar.increment
          @RowProcessed += 1
        rescue 
          pbar.increment
        end
      end
      pbar.finish
      puts  Rainbow("Se han guardado #{@RowProcessed} registros").green
    end
     
      
  end

end
