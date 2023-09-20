import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/NOTE/notes.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CollabComponent } from '../collab/collab.component';
import { CollabService } from 'src/app/Services/COLLAB/collab.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  noteList: any[] = [];
  filterNotes : any[] = [];
  noteID:any;
  
  constructor(private noteService:NotesService , public dialog: MatDialog , private collabService : CollabService){

  }
  ngOnInit(): void {
    
    //GET ALL NOTES:-
    this.noteService.getAllNotes().subscribe(
      (response: any) => {
        if (response.success && response.data) {
          this.noteList = response.data; 
          this.noteService.setNoteList(response?.data);
         // console.log('Notes in my display note.ts file*****:', this.noteList);
        } else {
          console.error('Error fetching notes:', response.message);
        }
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    ); 

    //GETTING ONLY FILTERED NOTES:-
    this.noteService.getFilteredNotes().subscribe((filteredNotes) => { 
      this.filterNotes = filteredNotes;
      console.log('Filtered Notes in DisplayNotesComponent:', this.filterNotes);
    });
  }

  //COLLAB POPUP OPEN:-
  openDialog = false;
  collabList: any[] = [];

  collabHandler(noteID: any){
    this.noteID = noteID;
    this.collabService.setNoteID(noteID);
    this.openDialog = true;
    this.collabList = this.collabService.getCollabs();

    const dialogRef = this.dialog.open(CollabComponent, {
      width: '40%', 
      // height:'40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 


  }

