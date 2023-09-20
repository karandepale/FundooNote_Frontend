import { Injectable } from '@angular/core';
import { HttpService } from '../HTTP/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private noteList: any[] = [];
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

   AddNotes(reqData: any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`https://localhost:44318/api/Note/Create_Note`,reqData, true, header);
  }

   //METHODS FOR GETTING AND SETTING THE NOTES :-
   setNoteList(noteList: any[]): void {
    this.noteList = noteList;
  }
   getNoteList(): any[] {
    return this.noteList;
  }


// METHODS FOR FILTER THE NOTES:-
   private filteredNotes: Subject<any[]> = new Subject<any[]>();
   getFilteredNotes(): Subject<any[]> {
    return this.filteredNotes;
  }
  filterNotes(searchText: string): void {
    const lowerSearchText = searchText.toLowerCase();
    const filteredNotes = this.noteList.filter((note) => {
      const title = note.title.toLowerCase();
      const description = note.description.toLowerCase();

      return title.includes(lowerSearchText) || description.includes(lowerSearchText);
    });
    this.filteredNotes.next(filteredNotes); 
  }
 

}
