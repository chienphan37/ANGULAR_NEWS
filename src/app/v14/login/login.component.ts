import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  registerForm!: FormGroup<{
    email: FormControl<string >;
    password: FormControl<string | null>;
  }>;


  constructor(private fb: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        nonNullable: true
      }),
      password: new FormControl('', {
        nonNullable: true
      })
    })

    this.loginForm.controls.email.valueChanges.subscribe(value => {
      console.log(value)
    })
    const  data = this.loginForm.getRawValue();


  //RECOMMEND
    this.registerForm = this.fb.group({
      email: this.fb.nonNullable.control(''),
      password: ''
    })
    // this.registerForm.removeControl("password");
  }

  ngOnInit(): void {
  }


}
