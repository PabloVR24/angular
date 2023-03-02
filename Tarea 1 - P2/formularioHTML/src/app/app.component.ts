import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  registerForm!: FormGroup;
  title = 'Formulario';
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,30}$/)]],
      lCurp: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{4}(\d{6})([a-zA-Z]{6})(([a-zA-Z0-9]){2})?$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,20}$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,20}$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,20}$/)]],
      tel: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      cel: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      mail: ['', [Validators.required, Validators.email]],
      mes: ['', Validators.required],
      mes1: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    alert('Success');
  }
}
