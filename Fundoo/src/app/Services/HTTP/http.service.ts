import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }
  postService(url:string , payload:any , token:boolean , httpOption:any )
  {
    return this.httpClient.post(url , payload , token && httpOption )
  }
}
