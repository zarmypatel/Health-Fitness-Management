import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    editForm :FormGroup = new FormGroup({
    fname : new FormControl(null,[Validators.required]),
    lname :new FormControl(null,[Validators.required]),
    email :new FormControl(null,[Validators.email,Validators.required]),
    dob:new FormControl(null,[Validators.required])
  });
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
  }
}
