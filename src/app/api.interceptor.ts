import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // 沒有建構式怎麼注入?(用 inject 就好了)
  var router = inject(Router);
  console.log(router.url);
  console.log(req.url);

  return next(req);
};
