import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { logOut, showAcc } from 'src/app/store/auth/auth.actions';
import { User } from 'src/app/store/auth/auth.model';
import { LoadFeeds, LoadMyFeeds } from 'src/app/store/feed/feed.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = {} as User;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(
      select('auth')
    ).subscribe(
      (res)=>{
        this.user = res.user;
      }
    )
  }
  showMyFeed() {
    this.store.dispatch(LoadMyFeeds({id: this.user.id}));

  }
  showAllFeed() {
    this.store.dispatch(LoadFeeds());
  }
  logOut(){
    this.store.dispatch(logOut())
  }
  showAccount(){
    this.store.dispatch(showAcc())
  }
}
