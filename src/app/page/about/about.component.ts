import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/app-routing-decorator.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
@Route({path: 'about'})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
