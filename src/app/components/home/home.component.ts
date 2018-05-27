import { Component, OnInit } from '@angular/core';
import { News } from '../../modal/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news : News[] = [];
  addingNews = '';
  editingId: number;
  editingTitle = '';
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.initNews();
  }

  initNews() {
    this.newsService.getNews()
      .subscribe(result => this.news = result);
  }

  addNews() {
    this.newsService.addNews(this.addingNews)
      .subscribe(newItem => this.news.push(newItem));
  }

  removeNews(id) {
      this.newsService.deleteById(id).subscribe();
      this.news = this.news.filter(news => news.id !== id);
  }
}
