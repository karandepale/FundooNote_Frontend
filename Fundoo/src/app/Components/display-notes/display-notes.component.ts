import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/NOTE/notes.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  noteList: any[] = [];

  constructor(private noteService:NotesService){

  }
  ngOnInit(): void {
    
    this.noteService.getAllNotes().subscribe(
      (response: any) => {
        if (response.success && response.data) {
          this.noteList = response.data; 
          console.log('Notes in my display note.ts:', this.noteList);
        } else {
          console.error('Error fetching notes:', response.message);
        }
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    );


  }

}
