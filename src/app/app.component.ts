import { Component } from '@angular/core';
import { Route } from './app-routing-decorator.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@Route({
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
})
export class AppComponent {
  title = 'ast-router-decorator';

  constructor() {}
}
