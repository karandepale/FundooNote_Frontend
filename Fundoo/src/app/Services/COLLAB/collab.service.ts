import { Injectable } from '@angular/core';
import { HttpService } from '../HTTP/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  token:any;
  NoteID : any;
  private collabList: any[] = [];

  constructor(private httpService:HttpService) {
    this.token = localStorage.getItem('token');
  } 

  //METHODS FOR GETTING AND SETTING THE NOTE - ID :-
  setNoteID(NoteID : any): void {
    this.NoteID = NoteID;
  }
   getNoteID(): void {
    return this.NoteID;
  }


   //METHODS FOR GETTING AND SETTING THE COLLABS LIST :-
   SetCollabs(collabList: any[]): void {
    this.collabList = collabList;
  }
   getCollabs(): any[] {
    return this.collabList;
  }



  getAllCollabs(NoteID:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      }) 
    }
    return this.httpService.getService(`https://localhost:44318/api/Collab/GetAllCollabs?NoteID=${NoteID}`, true, header)
  }

  createCollab(reqData: any , NoteID:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`https://localhost:44318/api/Collab/CreateCollab?NoteID=${NoteID}`,reqData, true, header);
  }



}
