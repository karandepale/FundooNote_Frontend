import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/Services/NOTE/notes.service';

@Component({
  selector: 'app-craete-note',
  templateUrl: './craete-note.component.html',
  styleUrls: ['./craete-note.component.scss']
})
export class CraeteNoteComponent implements OnInit {
  createEvent: any;
  @Output() noteCreated = new EventEmitter<void>();
  constructor(private noteService : NotesService) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  createNoteForm = new FormGroup({
    title : new FormControl(""),
    description : new FormControl("")
   })

  OnSubmit(){
    console.log("CLICKED...");
    let data = {
      title : this.createNoteForm.value.title,
      description : this.createNoteForm.value.description
    }
  }

  flag=true;
  toggleHandler(){
    this.flag = !this.flag;
  }

  closeHandler(){
    this.flag=true;
    let data = {
      title : this.createNoteForm.value.title,
      description : this.createNoteForm.value.description
    }
   // console.log("Data i have generate rignt now:-" , data);

    this.noteService.AddNotes(data).subscribe((response:any)=>{
     // console.log( "RESPONSE OF CREATE NOTE COMPONENT:- " ,  response)
      this.noteCreated.emit();

      this.createNoteForm.reset();    
     })

    
  }


}
