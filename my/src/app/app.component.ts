import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ReverseStringPipe} from './reverse-string.pipe';
import {InputValue} from './input-value';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReverseStringPipe]
})
export class AppComponent implements  OnInit {

  inputStringForm: FormGroup;
  inputValue = '';
  updatedValue:any = '';
  title = 'Reverse Application';

  constructor(private formBuilder: FormBuilder,
              private reverseStringPipe: ReverseStringPipe) {
  }
  ngOnInit() {
    this.inputStringForm = this.formBuilder.group( {
      'inputString' : ['', Validators.compose([Validators.required])]
    });
  }


  // method to call reverseStringPipe service and pass values to get desired string.
  save(): void {

    if (this.inputStringForm.valid) {

      // injection of ReverseStringPipe
      this.updatedValue = this.reverseStringPipe.transform(this.inputValue);
      }
    }
}
