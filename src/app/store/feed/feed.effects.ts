import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { FeedService } from "src/app/services/feed.service";
import { LoginService } from "src/app/services/login.service";
import * as FeedActions from "./feed.actions";
import { Feed } from "./feed.models";


@Injectable()
export class FeedEffects {
    constructor(private actions: Actions, private feed: FeedService) {

    }

    loadFeeds$ = createEffect(() => this.actions.pipe(
        ofType(FeedActions.LoadFeeds),
        switchMap(() => this.feed.getFeeds().pipe(
            map((feeds: Feed[]) => {
                return FeedActions.FeedsLoaded({feeds})
            })
        ))
    ));
    loadMyFeeds$ = createEffect(() => this.actions.pipe(
        ofType(FeedActions.LoadMyFeeds),
        switchMap(({id}) => this.feed.getMyFeeds(id).pipe(
            map((feeds: Feed[]) => {
                return FeedActions.FeedsLoaded({feeds})
            })
        ))
    ));
    deleteFeed$ = createEffect(() => this.actions.pipe(
        ofType(FeedActions.deleteFeed),
        switchMap(({id}) => this.feed.deleteFeed(id).pipe(
            map(() => {
                return FeedActions.feedDeleted({id})
            })
        ))
    ));
    addNewFeed$ = createEffect(() => this.actions.pipe(
        ofType(FeedActions.addFeed),
        switchMap(({newFeed}) => this.feed.addNewFeed(newFeed).pipe(
            map(() => {
                return FeedActions.feedAdded({newFeed})
            })
        ))
    ));
    editNewFeed$ = createEffect(() => this.actions.pipe(
        ofType(FeedActions.editFeed),
        switchMap(({editingFeed}) => this.feed.editFeed(editingFeed).pipe(
            map(() => {
                return FeedActions.feedEdited({editingFeed})
            })
        ))
    ));
}
