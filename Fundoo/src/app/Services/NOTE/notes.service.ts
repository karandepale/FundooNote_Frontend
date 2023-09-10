import { Injectable } from '@angular/core';
import { HttpService } from '../HTTP/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;
  constructor(private httpService:HttpService) {
    this.token = localStorage.getItem('token');
   }

   getAllNotes()
   {
     let header = {
       headers: new HttpHeaders({
         'Content-type':'application/json',
         'Authorization':'Bearer '+this.token
       })
     }
     return this.httpService.getService(`https://localhost:44318/api/Note/GetAllNotes`, true, header)
   }


}
