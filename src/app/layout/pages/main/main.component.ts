import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { feedReducer } from 'src/app/store/feed/feed.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}}
