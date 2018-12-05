import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getAlbums(): Observable<any> {
    return this.http.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getTodos(): Observable<any> {
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }

}

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Albums {
  userId: number;
  id: number;
  title: string;
}

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
