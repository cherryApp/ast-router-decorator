import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/app-routing-decorator.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Route({path: 'login'})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
