import { Component, NgModule, Type } from '@angular/core';
import { RouterModule, Router, Route as R } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface IRouteWithComponent {
  route: R;
  targetClass: any;
}

const routes: R[] = [];
const routeList: IRouteWithComponent[] = [];
const actualRouter: BehaviorSubject<Router> = new BehaviorSubject(null);

export const Route = (route: R): any => {
  return (targetClass: Component): any => {
    routeList.push({route, targetClass});
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
    for (const r of routeList) {
      this.pushRoute(r);
    }
  }

  pushRoute(routeSettings: IRouteWithComponent): void {
    if (!this.router) {
      return;
    }

    // Set component.
    if (!routeSettings.route.loadChildren) {
      routeSettings.route.component = routeSettings.route.component
        || (routeSettings.targetClass as unknown as Type<any>);
    } else {
      routeSettings.route.component = null;
    }

    // Push route.
    this.router.config.push(routeSettings.route);
    console.log(this.router.config);
  }
}
