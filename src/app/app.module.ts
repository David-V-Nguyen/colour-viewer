import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColourWheelComponent } from './colour-wheel/colour-wheel.component';
import { ColoursComponent } from './colours/colours.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSketchModule} from 'ngx-color/sketch';
import { ColorCircleModule} from 'ngx-color/circle';

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
    ColorCircleModule,
    ColorSketchModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
