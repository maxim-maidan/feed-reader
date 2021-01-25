import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeeds() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getMyFeeds(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
  }
  deleteFeed(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  addNewFeed(newFeed){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', newFeed);;
  }
  editFeed(newFeed){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', newFeed);;
  }
}
