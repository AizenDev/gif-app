import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  searchImg(tag) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=DQLApwk8BVfIk6DlReuTSzSo3dY59707&tag=${tag}`;
    return this.http.get(url);
  }
}
