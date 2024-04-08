class GeoController < ApplicationController

    def index
        param! :page, Integer
        param! :per_page, Integer, min: 0, max: 1000
        param! :mag, Array
        
        @page = params[:page] || 1
        @per_page = params[:per_page] || 50
        @filterMagType= []
        if params[:mag]
            @filterMagType = params[:mag].split(',')
        end

        if @filterMagType.length < 1
            @dataGeo = GeoDatum.order(:id).page(@page).per( @per_page)
            @totalRows = GeoDatum.count
        else
            @dataGeo = GeoDatum.where(magnitude_type: @filterMagType).order(:id).page(@page).per( @per_page)
            @totalRows = GeoDatum.where(magnitude_type: @filterMagType).count
        end
        @dataGeoFactory = []
        for item in @dataGeo do
            itemTmp = {
                "id": item.id,
                "type": item.type_m,
                "attributes":{
                    "external_id": item.id_geo,
                    "magnitude": item.magnitude,
                    "place": item.place,
                    "time": item.time,
                    "tsunami": item.tsumami,
                    "mag_type": item.magnitude_type,
                    "title": item.title,
                    "coordinates": {
                            "longitude": item.longitude,
                            "latitude": item.latitude
                        },
                    "links": {
                        "external_url": item.url
                    }
                }
            }
            @dataGeoFactory.push(itemTmp)
        end
        render json: {data: @dataGeoFactory , pagination: {current_page: @page, total:  @totalRows, per_page:  @per_page}}
    end


    def create
        param! :id_geo_data, Integer, required: true
        param! :comment, String, required: true
        
        @coment = Comment.new(comment: params[:comment], id_geo_data: params[:id_geo_data])
        if @coment.save 
            render json: {message: "Comentario creado correctamente"}
        else
            render json: {message: "Error al crear comentario"}
        end
    end
end
