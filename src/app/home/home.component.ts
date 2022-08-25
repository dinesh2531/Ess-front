import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valfun($event:any){
    var mailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passvalid= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,18}$/;

    

    if($event){

      var email=(<HTMLInputElement>document.getElementById("email")).value ;


      var pass=(<HTMLInputElement>document.getElementById("pass")).value ;

      if(email==""){

        alert("Hint:Please Enter the your email")
        
      }else if(!(email.match(mailvalid))){

        alert("Hint:Please Give valid mail Id")


      }else if(pass==""){

        alert("Hint:Please Enter the ur password ")

      }else if(!(pass.match(passvalid))){
         
        alert("Hint:Please Give valid password")

       

      }else{
        alert("LogIn Success")

        // alert("/reg")
      }
    }

    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
