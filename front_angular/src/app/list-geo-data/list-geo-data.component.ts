import { Component, ElementRef } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {ApiCoreService} from '../api-core.service';

@Component({
  selector: 'app-list-geo-data',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatListModule],
  templateUrl: './list-geo-data.component.html',
  styleUrl: './list-geo-data.component.scss'
})
export class ListGeoDataComponent {
  public dataSource = [];
  public displayedColumns: string[] = ['id', 'IDExternal', 'Type', 'title'];
  public per_page = 50;
  public page = 1;
  public total_pages = 1;
  public typesOfShoes: string[] = ['md', 'ml', 'ms', 'mw', 'me', 'mi', 'mb', 'mlg'];
  public selectedOptions = [];
  public selectedOption: any;

  constructor(private apiCoreService: ApiCoreService,
              private elementRef: ElementRef<HTMLElement>
  ){}

  ngOnInit(): void {
    this.apiCoreService.getdata(1,50).then((items: any) => {
      this.dataSource = items.data.data;
      this.total_pages = items.data.pagination.total / items.data.pagination.per_page;
    });
  }

  selectPage(data:any){
    this.per_page = data.pageSize;
    this.page = data.pageIndex + 1;
    this.findData()
  }

  findData():void{
    this.apiCoreService.getdata(this.page,this.per_page).then((items: any) => {
      this.dataSource = items.data.data;
      this.total_pages = items.data.pagination.total / items.data.pagination.per_page;
    });
  }

 
  onSelection($event:any, selecteOption: any){
    this.selectedOption=selecteOption;
   
  }
}
