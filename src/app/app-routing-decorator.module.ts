/**
 * Annotated Router implementation for Angular applications.
 * Usage:
 * 1. Import module into the app.module and place it the imports array.
 * 2. Set a Route in the corresponding component, with a Classdecorator:
 * @Route({path: 'login'})
 * export class LoginComponent { ...
 * 3. You can also set a lazy loaded Route module from any component:
 * @Route({
 * path: 'admin',
 * loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
 * })
 * export class AppComponent { ...
 */
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
