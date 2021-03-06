import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColourWheelComponent } from './colour-wheel/colour-wheel.component';
import { ColoursComponent } from './colours/colours.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'colourWheel', component: ColourWheelComponent},
  {path: 'colours', component: ColoursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
