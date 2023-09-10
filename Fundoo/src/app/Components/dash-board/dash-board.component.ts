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
  // noteList: any[] = [];

  constructor( private userService:UserService , private noteService:NotesService ,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route:Router, private popup:MatSnackBar
    ) {}

  ngOnInit(): void {
     this.userData = this.userService.getUserData();
      console.log('User Data in Dashboard page:', this.userData);

      // this.noteService.getAllNotes().subscribe(
      //   (notes: any) => {
      //     this.noteList = notes; // Populate the notes array
      //     console.log('Notes:', this.noteList);
      //   },
      //   (error: any) => {
      //     console.error('Error fetching notes:', error);
      //   }
      // );
     
  }


  logOut(){
    console.log("logged out")
    localStorage.removeItem('token')  
    this.route.navigateByUrl("")
    this.popup.open('Logout')
  }
   searchNote(event:any){
  //   console.log('event.target.value',event.target.value);
  //   //this.dataService.sendMessage(event.target.value);
   }

   toggleNotesView(){
   //  this.listView = !this.listView;
  //   console.log("toggleNotesView",this.listView);
   }

   
}
