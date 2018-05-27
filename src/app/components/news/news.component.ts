import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../modal/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  selectedNews: News;
  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.initSelectedNews();
  }

  initSelectedNews(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.newsService.findById(id).subscribe(result => this.selectedNews = result );
  }
}
