import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder) { }
  
  public ngOnInit() : void {
  
  }

  get username() { 
    return this.loginForm.get('username'); 
  }

  public onLoginSubmit() : void {
    console.log(this.loginForm);
    
  }

  onButtonClick(){
    console.log("Thanks, you clicked me!");
    
  }

}
