import { Component, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "./post"
import {Observable} from 'rxjs' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentification';
  
  public posts: Observable<Post> = [];
  readonly ROOT_URL = 'http://127.0.0.1:8000'
  constructor(private http: HttpClient){
  }

   getPosts() {
    this.http.get(this.ROOT_URL + '/all-articles').subscribe(data => this.posts = data)
  }

}
