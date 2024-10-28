import { Component } from '@angular/core';
import {ListSubmissionService} from "../list-submission.service";
import {NgForOf} from "@angular/common";
import {NgFor} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf, NgFor, RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  submissions =[];
  title = "All Submissions";
  constructor(private listSubmissionService: ListSubmissionService) {
    this.listSubmissionService.getSubmissions().subscribe((data:any)=> {
      console.log(data);
      this.submissions =  data;
    })
  }

}
