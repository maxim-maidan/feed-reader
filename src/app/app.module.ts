import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { MainComponent } from './layout/pages/main/main.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromFeed  from './store/feed/feed.reducer';
import * as fromAuth  from './store/auth/auth.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import { HeaderComponent } from './layout/components/header/header.component';
import { FeedComponent } from './layout/components/feed/feed.component';
import { FeedsComponent } from './layout/pages/feeds/feeds.component';
import { FeedEffects } from './store/feed/feed.effects';
import { AccountComponent } from './layout/pages/account/account.component';

const reducers = { 
  feed: fromFeed.reducer, 
  auth: fromAuth.reducer,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent,
    HeaderComponent,
    FeedComponent,
    FeedsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, FeedEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
