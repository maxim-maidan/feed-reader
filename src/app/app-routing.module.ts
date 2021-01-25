import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "./layout/components/feed/feed.component";
import { AccountComponent } from "./layout/pages/account/account.component";
import { FeedPageComponent } from "./layout/pages/feed-page/feed-page.component";
import { FeedsComponent } from "./layout/pages/feeds/feeds.component";
import { LoginComponent } from "./layout/pages/login/login.component";
import { MainComponent } from "./layout/pages/main/main.component";
import { NotFoundComponent } from "./layout/pages/not-found/not-found.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'account', component: AccountComponent, pathMatch: 'full' },
  { path: 'feed/:id', component: FeedPageComponent, pathMatch: 'full' },
  {
    path: 'feeds', component: MainComponent, pathMatch: 'full', children: [
      { path: '', component: FeedsComponent, pathMatch: 'full' },
      { path: ':id', component: FeedsComponent },
    ]
  },
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/feeds', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }