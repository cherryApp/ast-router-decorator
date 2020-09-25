// tslint:disable: only-arrow-functions
import { Injectable, Type } from '@angular/core';
import { Router, Route as R } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const actualRouter: BehaviorSubject<Router> = new BehaviorSubject(null);

@Injectable({
  providedIn: 'root'
})
export class RouterDecoratorService {

  constructor(
    private router: Router
  ) {
    actualRouter.next(this.router);
  }
}

export function Route(route: R): ClassDecorator {
  return (targetClass): any => {
    actualRouter.subscribe( router => {
      if (!router) {
        return;
      }
      router.config.push(({
        ...route,
        component: (targetClass as unknown as Type<any>)
      }));
      console.log(router.config);
    });
  };
}
