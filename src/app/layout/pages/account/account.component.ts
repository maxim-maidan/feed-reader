import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/store/auth/auth.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user: User;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.store.pipe(
      select('auth')
    ).subscribe(
      (res) => {
        this.user = res.user;
      }
    )
  }

}
