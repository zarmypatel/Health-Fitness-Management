import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  changePassForm :FormGroup = new FormGroup({
    pass : new FormControl(null,[Validators.required]),
    newpass :new FormControl(null,[Validators.required]),
    cnewpass :new FormControl(null,[Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
  }
}
