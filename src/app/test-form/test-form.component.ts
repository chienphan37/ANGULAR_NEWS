import {Component, inject} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors, ValidatorFn,
  Validators
} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {JsonPipe, NgIf} from "@angular/common";
import {NonWhiteSpaceValidator} from "../custom-validator/NonWhiteSpaceValidator";
import {LoginService} from "../service/login.service";
import {delay, map, Observable, of, switchMap, timer} from "rxjs";


@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [
    MatFormField,
    MatCheckbox,
    MatButton,
    MatInput,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})
export class TestFormComponent {


  loginForm = this.fb.group({
    email: this.fb.nonNullable.control(
      '123',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.min(10),
        NonWhiteSpaceValidator('Email'),
      ]),
      // this.validateUserNameFromAPIDebounce.bind(this)
    ),
    password: this.fb.nonNullable.control(''),
    remember: this.fb.nonNullable.control(false)
  }
  ,{
    // validators: this.validateControlsValue("email", "password"),
    // asyncValidators: this.validateControlsValueDebounce("email", "password")
  }
  )

  constructor(private loginService :LoginService, private fb: FormBuilder) {
    console.log("12341123")
    this.loginForm.patchValue({email: 'chienphan'});
    const valueEmail = this.loginForm.controls['email'].value;
    console.log('email', valueEmail);
  }

  onSubmit() {
    console.log(this.loginForm);

  }


  // validateControlsValue(firstControlName: string, secondControlName: string) {
  //
  //   return (formGroup: FormGroup)=> {
  //     console.log("validateControlsValue() start")
  //     const firstControlValue = formGroup.controls[firstControlName].value;
  //     const secondControlValue = formGroup.controls[secondControlName].value;
  //     return firstControlValue === secondControlValue
  //       ? null
  //       : {
  //         valueNotMatch: {
  //           firstControlValue,
  //           secondControlValue
  //         }
  //       };
  //   };
  // }

  validateUserNameFromApi  () {
    console.log("AAAAAAAAAAAAAAAA")
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.loginService.validateUserName(control.value).pipe(
        map(isValid => {
          return isValid ? null : {invalidEmail: true}
        })
      )
    }
  }

  // validateUserNameFromAPIDebounce(
  //   control: AbstractControl
  // ): Observable<ValidationErrors | null> {
  //   return timer(300).pipe(
  //     switchMap(() =>
  //       this.loginService.validateUserName(control.value).pipe(
  //         map(isValid => {
  //           if (isValid) {
  //             return null;
  //           }
  //           return {
  //             usernameDuplicated: true
  //           };
  //         })
  //       )
  //     )
  //   );
  // }

}
