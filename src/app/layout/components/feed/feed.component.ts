import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteFeed } from 'src/app/store/feed/feed.actions';
import { Feed } from 'src/app/store/feed/feed.models';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() feed: Feed;
  @Output() editFeed: EventEmitter<object> = new EventEmitter();
  
  isMyPost: boolean = false;
  date = new Date();
  constructor(private activeRout: ActivatedRoute, private store: Store<any>) { }

  ngOnInit(): void {
    this.activeRout.queryParams.subscribe(
      (res) =>{
        this.isMyPost = res.id;
      }
    );
  }
  deletePost(){
    this.store.dispatch(deleteFeed({id: this.feed.id}))
  }
  editPost(){
    this.editFeed.emit(this.feed);
  }
}
