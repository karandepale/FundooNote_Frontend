import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/USER/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor( private snackBar:MatSnackBar , private formBuilder:FormBuilder, private userService:UserService, private route:Router) { }

ngOnInit(): void {  } 

loginForm = new FormGroup({
  email:new FormControl("", Validators.required),
  password : new FormControl("" , [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).{8,}$')])
 })

loginHandler(){
  let data = {
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
  }
  
  this.userService.Login(data).subscribe((response:any)=>{
   console.log(response);

   if(response.data != null){
    localStorage.setItem('token', response?.data?.jwtToken);
    this.snackBar.open("Login Successfully", '',{duration: 2000})
     this.route.navigateByUrl('/Dashboard')
     this.userService.setUserData(response?.data);
    //  console.log("Token:- " , localStorage.getItem('token'));
   }
 });

}

}
