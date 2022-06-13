import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColourWheelComponent } from './colour-wheel/colour-wheel.component';
import { ColoursComponent } from './colours/colours.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColourWheelComponent,
    ColoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
