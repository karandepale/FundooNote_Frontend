import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CollabService } from 'src/app/Services/COLLAB/collab.service';
import { UserService } from 'src/app/Services/USER/user.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {
  constructor(private userService: UserService, private collaService: CollabService ,  public dialog: MatDialog ) {}

  userData: any;
  firstChar: any;
  collabList: any[] = [];
  NoteID : any;
 
  createCollabForm = new FormGroup({
    email : new FormControl("")
   });

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    this.firstChar = this.userData?.userEntity?.firstName.charAt(0);
    this.NoteID = this.collaService.getNoteID();

   

    // GET ALL COLLABS FOR A PARTICULAR NOTE:-
    this.collaService.getAllCollabs(this.NoteID).subscribe(
      (response: any) => {
        if (response.success && response.data) {
          this.collaService.SetCollabs(response?.data);
          this.collabList = response?.data;
        } else {
          console.error('Error fetching notes:', response.message);
        }
      }
    );  
  
  }
  OnSubmit(){
    console.log("collab form submit clicked");
    let data = {
      email : this.createCollabForm.value.email,
    }
    this.collaService.createCollab(data , this.NoteID).subscribe((response)=>{
      console.log("response of create collab:- " , response);
    })
  }


  OnCancel(){
    // const dialogRef = this.dialog.close(CollabComponent, {
    //   width: '40%', 
    //   // height:'40%',
    };

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}
