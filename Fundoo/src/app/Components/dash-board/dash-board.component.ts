import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/USER/user.service';
import { OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/NOTE/notes.service';

 
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit  {
  userData: any;
  listView = true;
  filteredNotes: any[] = [];
  noteList: any[] = [];
 
  constructor( private userService:UserService , private noteService:NotesService ,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route:Router, private popup:MatSnackBar
    ) {}

      ngOnInit(): void {
      this.userData = this.userService.getUserData();
     // console.log('User Data in Dashboard page:', this.userData);

      this.noteList = this.noteService.getNoteList();
     // console.log( 'NoteList Data in my Dashboard: ' , this.noteList);

      this.filteredNotes = [...this.noteList];

  }

  // searchNotes(event: any): void {
  //   const searchText = event.target.value.toLowerCase();

  //   // Filter the notes based on the search input
  //   this.filteredNotes = this.noteList.filter((note) => {
  //     const title = note.title.toLowerCase();
  //     const description = note.description.toLowerCase();

  //     return title.includes(searchText) || description.includes(searchText);
  //   });
  //   this.noteService.setFilteredNotes(this.filteredNotes);
  //   console.log("*********" , this.filteredNotes);
  //     }

  searchNotes(event: any): void {
    const searchText = event.target.value;
    this.noteService.filterNotes(searchText);
  }


  logOut(){
    console.log("logged out")
    localStorage.removeItem('token')  
    this.route.navigateByUrl("")
    this.popup.open('Logout')
  }

   toggleNotesView(){
   //  this.listView = !this.listView;
  //   console.log("toggleNotesView",this.listView);
   }

   
}
