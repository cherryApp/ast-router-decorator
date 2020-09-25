import { NgModule, Injectable, Type, APP_INITIALIZER } from '@angular/core';
// tslint:disable: only-arrow-functions
import { Routes, RouterModule, Router, Route as R } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const routes: Routes = [];

const actualRouter: BehaviorSubject<Router> = new BehaviorSubject(null);

@Injectable({
  providedIn: 'root'
})
class RouterDecoratorService {

  constructor(
    private router: Router
  ) { }

  init(): any {
    return () => {
      actualRouter.next(this.router);
    };
  }
}

const RouterDec = function(route: R): ClassDecorator {
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
  exports: [RouterModule, (RouterDec as unknown as Type<any>)],
})
export class AppRoutingDecoratorModule { }
