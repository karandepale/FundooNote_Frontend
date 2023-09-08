import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/USER/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:  UserService ) { }

  ngOnInit(): void {
  }

    registerForm = new FormGroup({
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    //dateOfBirth : new FormControl(""),
    email : new FormControl(""),
    password : new FormControl("")
  })

  RegisterationHandler(){
    let data = {
      firstName : this.registerForm.value.firstName,
      lastName : this.registerForm.value.lastName,
     // dateOfBirth : this.registerForm.value.dateOfBirth,
      email : this.registerForm.value.email,
      password : this.registerForm.value.password
    }

    this.userService.Register(data).subscribe((response:any)=>{
      console.log(response);
    })
  }



}
