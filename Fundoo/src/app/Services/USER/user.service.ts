import { Injectable } from '@angular/core';
//import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HTTP/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService:HttpService) { }
  
  // SETTING and GETTING THE USER DATA FROM LOGIN COMPONENT:-
  private userData: any;
  setUserData(data: any) {
    this.userData = data;
  }
  getUserData() {
    return this.userData;
  }

  
  Login(data:any){
    let header = {
      headers : new HttpHeaders({
        'content-type':'application/json'
      }) 
    }
    return this.httpService.postService( `https://localhost:44318/api/User/Login` , data,false, header)
  }

  Register(data:any){
    let header = {
      headers : new HttpHeaders({
        'content-type':'application/json' 
      })  
    }
   return this.httpService.postService(`https://localhost:44318/api/User/Registration` , data , false , header)
  }

  

}
  

