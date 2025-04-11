import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators, Form } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authForm:FormGroup;
  isLogin = true;
  /**
   *
   */
  constructor(private fb:FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }
  toggle(){
    this.isLogin = !this.isLogin;
  }
  onSubmit(){
    if(this.authForm.valid){
      const{email,password} = this.authForm.value;
      if(this.isLogin){
        console.log("Logging in",email,password)
      }
      else{
        console.log("Registering",email,password)
      }
      
  }
}
}
