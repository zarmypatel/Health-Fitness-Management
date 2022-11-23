import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerForm :FormGroup = new FormGroup({
    Email : new FormControl(null,[Validators.email,Validators.required]),
    userName :new FormControl(null,[Validators.required]),
    pass : new FormControl(null,[Validators.required]),
    cpass :new FormControl(null,[Validators.required])
  });
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
  }

}
