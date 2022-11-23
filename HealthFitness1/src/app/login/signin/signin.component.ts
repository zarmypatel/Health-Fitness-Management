import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm:FormGroup=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    pass:new FormControl(null,[Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    
  }

}
