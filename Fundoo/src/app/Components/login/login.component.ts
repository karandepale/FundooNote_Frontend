import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/USER/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private route:Router) { }

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
     this.route.navigateByUrl('')
   }
 });

//  createAccHandler(){
//   console.log("Clicked...");
// }


}



}
