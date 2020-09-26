import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { AboutComponent } from './page/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingDecoratorModule } from './app-routing-decorator.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingDecoratorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
