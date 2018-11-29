import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any>{
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

}

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
