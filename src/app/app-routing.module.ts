import { ProdectsComponent } from './products.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes=[
  {path:'', component: HomeComponent},
  {path:'products', component: ProdectsComponent},
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
