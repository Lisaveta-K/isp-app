import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ CommonModule, BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
