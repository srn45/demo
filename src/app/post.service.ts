import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { Pipe } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  user:any[]=[] 
  GetCategories():Observable<any[]>{
    return this.http.get<any[]>('https://www.themealdb.com/api/json/v1/1/search.php?f=a').pipe(map(user => this.user));
  }

}
