import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { addFeed, editFeed, FeedsLoaded, LoadFeeds } from 'src/app/store/feed/feed.actions';
import { Feed } from 'src/app/store/feed/feed.models';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  feeds: Feed[] = [];
  isMyPost: boolean = false;
  feedForm: FormGroup;
  userId: number;
  isEnableEditing: boolean = false;
  editingPostId: number = 0;
  isEmptyForm: boolean = false;

  constructor(private store: Store<any>, private activeRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(LoadFeeds());
    this.store.pipe(
      select('feed')
    ).subscribe(
      (res) => {
        this.feeds = res.feed;
      }
    )
    this.activeRout.queryParams.subscribe(
      (res) => {
        this.isMyPost = res.id;
      }
    );
    this.store.pipe(
      select('auth')
    ).subscribe(
      (res) => {
        this.userId = res.user.id;
      }
    )
    this.feedForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    });
  }
  addPost() {
    const newFeed: Feed = {
      id: Date.now(),
      userId: this.userId,
      title: this.feedForm.value.title,
      body: this.feedForm.value.body,
    }
    if (this.feedForm.value.title !== null && this.feedForm.value.body !== null) {
      this.isEmptyForm = false;
      this.store.dispatch(addFeed({ newFeed }));
      this.feedForm.patchValue({ title: null });
      this.feedForm.patchValue({ body: null });
    }
    else {
      this.isEmptyForm = true;
    }
  }

  editFeed(feed: Feed) {
    this.isEnableEditing = true;
    this.feedForm.patchValue({ title: feed.title });
    this.feedForm.patchValue({ body: feed.body });
    this.editingPostId = feed.id;
  }

  editPost() {
    this.isEnableEditing = false;
    const editingFeed: Feed = {
      id: this.editingPostId,
      userId: this.userId,
      title: this.feedForm.value.title,
      body: this.feedForm.value.body,
    }
    this.store.dispatch(editFeed({ editingFeed }))

    this.feedForm.patchValue({ title: null });
    this.feedForm.patchValue({ body: null });
  }
}
