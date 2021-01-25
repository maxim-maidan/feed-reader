import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedsComponent } from "./layout/pages/feeds/feeds.component";
import { LoginComponent } from "./layout/pages/login/login.component";
import { MainComponent } from "./layout/pages/main/main.component";
import { NotFoundComponent } from "./layout/pages/not-found/not-found.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'feeds', component: MainComponent, pathMatch: 'full', children: [
    {path: '', component: FeedsComponent, pathMatch: 'full' },
    {path: ':id', component: FeedsComponent},
    {path: 'account', component: FeedsComponent},
  ]},
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  { path: '',redirectTo: '/feeds', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }