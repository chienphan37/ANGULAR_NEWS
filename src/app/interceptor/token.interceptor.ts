import {HttpInterceptorFn} from '@angular/common/http';
import {Injectable} from "@angular/core";


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const reqCopy = req.clone();
  reqCopy.headers.append("Authorization", 'tokennnn')
  return next(reqCopy);
};
