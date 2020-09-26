// tslint:disable: only-arrow-functions
import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule, Router, Route as R } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const routes: Routes = [];
const actualRouter: BehaviorSubject<Router> = new BehaviorSubject(null);

export const Route = function(route: R): any {
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
export class AppRoutingDecoratorModule {
  constructor(
    private router: Router,
  ) {
    actualRouter.next(router);
  }
}
