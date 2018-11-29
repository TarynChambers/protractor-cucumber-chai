import { Component, OnInit } from '@angular/core';
import {DashboardService, Posts} from '../../services/dashboard.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
posts: Posts[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getPosts();
  }


  getPosts() {
    this.dashboardService.getPosts()
      .subscribe((data: Posts[]) => this.posts = data);
  }
}
