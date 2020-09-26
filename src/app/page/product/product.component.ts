import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/app-routing-decorator.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
@Route({path: 'products'})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
