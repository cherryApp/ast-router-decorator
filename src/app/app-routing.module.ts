// tslint:disable: only-arrow-functions
import { Injectable, NgModule, Type } from '@angular/core';
import { Routes, RouterModule, Router, Route } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const routes: Routes = [];
const actualRouter: BehaviorSubject<Router> = new BehaviorSubject(null);

const RouterDec = function(route: Route): any {
  return (targetClass): any => {
    actualRouter.subscribe(router => {
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
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private router: Router,
  ) {
    console.log('routing module');
    console.log(router);
    actualRouter.next(router);
  }
}
