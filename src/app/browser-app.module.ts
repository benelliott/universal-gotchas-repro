import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    MatCheckboxModule
  ]
})
export class BrowserAppModule {

}
