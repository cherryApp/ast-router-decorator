import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/service/router-decorator.service';

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
