import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiCoreService {
  private urlServer = 'http://localhost:3000/';
  private headers = {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", "Access-Control-Allow-Headers": "X-Requested-With"};
  constructor() { }

  getdata(page: number, per_page: number = 50, filter:string = 'md,ml,ms,mw,me,mi,mb,mlg'): Promise<AxiosResponse<any, any>> {
    return axios.get(`${this.urlServer}geo?page=${page}&per_page=${per_page}&mag=${filter}`, {headers : this.headers});
  }

  saveComment(id: number, comment: string): Promise<AxiosResponse<any, any>>{
    return axios.post(`${this.urlServer}create`, {id_geo_data:id , comment}, {headers : this.headers});
  }
}
