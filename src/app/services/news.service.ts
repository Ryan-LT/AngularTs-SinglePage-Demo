import { Injectable } from '@angular/core';
import { News } from '../modal/news';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private URL = 'http://localhost:3000/news';
  constructor(private http: HttpClient) { }

  getNews (): Observable<News[]> {
    return this.http.get<News[]>(this.URL);
  }

  findById(id: number): Observable<News> {
    return this.http.get<News>(`${this.URL}/${id}`);
  }

  addNews (news: News): Observable<News> {
    return this.http.post<News>(this.URL, news, httpOptions);
  }

  deleteById(id: number): Observable<News> {
    return this.http.delete<News>(`${this.URL}/${id}`, httpOptions);
  }

  update(news: News): Observable<News> {
    return this.http.put<News>(`${this.URL}/${news.id}`, news, httpOptions);
  }
}
