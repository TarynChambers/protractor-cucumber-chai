import { Component, OnInit } from '@angular/core';
import {Albums, DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  albums: Albums[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.dashboardService.getPosts()
      .subscribe((data: Albums[]) => this.albums = data);
  }

}
