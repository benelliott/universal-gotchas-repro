import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ExampleComponent,
    HomepageComponent
  ],
  providers: [],
  exports: [
    AppComponent,
    ExampleComponent,
    HomepageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
