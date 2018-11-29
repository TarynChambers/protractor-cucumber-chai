import { Component, OnInit } from '@angular/core';
import {DashboardService, Todos} from '../../services/dashboard.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  todos: Todos[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.dashboardService.getTodos()
      .subscribe((data: Todos[]) => this.todos = data);
  }

}
