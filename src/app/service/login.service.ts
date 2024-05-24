import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient)

  constructor() {
  }

  public isLoggedIn() {
    return true;
  }

  validateUserName(userName: string): Observable<boolean> {
    console.log("validateUserName", userName)
    let existedUser = ['chien', 'chien1']
    console.log(userName)
    const isValid = existedUser.every(x => x !== userName);
    return of(isValid).pipe(delay(1000));
  }

}
