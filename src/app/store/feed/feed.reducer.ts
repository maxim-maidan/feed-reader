import { createReducer, on, Action } from "@ngrx/store";
import { feedAdded, feedDeleted, feedEdited, FeedsLoaded } from "./feed.actions";
import { Feed } from "./feed.models";

export interface FeedState {
    feed: Feed[];
}

const initialState: FeedState = {
    feed: []
};

export const feedReducer = createReducer(
    initialState,
    on(FeedsLoaded, (state, { feeds }) => {
        return { ...state, feed: feeds }
    }),
    on(feedDeleted, (state, {id}) =>{
        return {...state, feed: state.feed.filter(feed => feed.id !== id)}
    }),
    on(feedAdded, (state, {newFeed}) =>{
        console.log(newFeed);
        return {...state, feed: [newFeed, ...state.feed]}
    }),
    on(feedEdited, (state, {editingFeed}) =>{
        return {...state, feed: state.feed.map(feed => {
            if(feed.id === editingFeed.id){
                return editingFeed;
            }
            else{
                return feed;
            }
        })}
    }),
);

export function reducer(state: FeedState | undefined, action: Action) {
    return feedReducer(state, action);
}