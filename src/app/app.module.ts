import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { AboutComponent } from './page/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingDecoratorModule } from './app-routing-decorator.module';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent
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
