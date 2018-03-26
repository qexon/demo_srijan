import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DetailsService } from '../details.service';
import { EmailValidation } from './emailValid';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb:FormBuilder,private detailService:DetailsService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email':['',[Validators.required,EmailValidation.emailValid]],
      'username':['',Validators.required],
      'password':['',Validators.required],
      'phoneNumber':['',Validators.required],
      'country':['',Validators.required]
    })
  }


  get email()  { 
    return this.loginForm.controls.email
  }

  get username()  { 
    return this.loginForm.controls.username
  }

  get password()  { 
    return this.loginForm.controls.password
  }

  get phoneNumber()  { 
    return this.loginForm.controls.phoneNumber
  }

  get country()  { 
    return this.loginForm.controls.country
  }


  submit(form){
    this.detailService.broadcastObjectChange(form)
  }
}
