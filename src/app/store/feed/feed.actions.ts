import { Action, createAction, props } from "@ngrx/store";
import { Feed } from "./feed.models";

export enum feedActionsType {
    load = '[FEED] Load feeds',
    loadMy = '[FEED] Load my feeds',
    loaded = '[FEED] Feeds loaded',
    delete = '[FEED] Delete Feed',
    deleted = '[FEED] Feed Deleted',
    add = '[FEED] Add New Feed',
    added = '[FEED] New Feed Added',
    edit = '[FEED] Edit Feed',
    edited = '[FEED] Feed Edited',
};



export const LoadFeeds = createAction(
    feedActionsType.load
);
export const LoadMyFeeds = createAction(
    feedActionsType.loadMy,
    props<{ id: number }>()
);
export const FeedsLoaded = createAction(
    feedActionsType.loaded,
    props<{ feeds: Feed[] }>()
)
export const deleteFeed = createAction(
    feedActionsType.delete,
    props<{ id: number }>()
)
export const feedDeleted = createAction(
    feedActionsType.deleted,
    props<{ id: number }>()
)
export const addFeed = createAction(
    feedActionsType.add,
    props<{ newFeed: Feed }>()
)
export const feedAdded = createAction(
    feedActionsType.added,
    props<{ newFeed: Feed }>()
)
export const editFeed = createAction(
    feedActionsType.edit,
    props<{ editingFeed: Feed }>()
)
export const feedEdited = createAction(
    feedActionsType.edited,
    props<{ editingFeed: Feed }>()
)
