import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/service/router-decorator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Route({path: ''})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
