import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterModule } from './counter/app.counter.module';
import { HeroesModule } from './Heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
    ,counterModule
    ,HeroesModule
    ,DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
