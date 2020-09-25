import { Component } from '@angular/core';
import { Route, RouterDecoratorService } from './service/router-decorator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ast-router-decorator';

  constructor(
    private rotuerService: RouterDecoratorService,
  ) {}
}
