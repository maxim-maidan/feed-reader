import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Feed } from 'src/app/store/feed/feed.models';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  feeds: Feed[];
  feed: Feed;
  feedId: number;

  constructor(private activeRout: ActivatedRoute, private store: Store<any>) { }

  ngOnInit(): void {

      this.store.pipe(
        select('feed')
      ).subscribe(
        (res) => {
          this.feeds = res.feed;
        }
      )
      this.activeRout.params.subscribe(
        (res) =>{
          this.feedId = res.id;
        }
      );
      this.feed = this.feeds.find(el => el.id === +this.feedId);
  }
}
