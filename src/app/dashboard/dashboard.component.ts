import { Component } from '@angular/core';
import {ListSubmissionService} from "../list-submission.service";
import {NgForOf} from "@angular/common";
import {NgFor} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";

export interface submissionLists {
  name: string
  email: string
  message: string
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf, NgFor, RouterLink, RouterModule, ReactiveFormsModule, AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  submissions:any[] =[];
  submission:any[] =[];
  submissionLists:any[] = [];
  filteredSubmission: any[] = [];

  title = "All Submissions";
  constructor(private listSubmissionService: ListSubmissionService) {

    this.listSubmissionService.getSubmissions().subscribe((data:any)=> {
      this.submissionLists =  data;
      console.log(data);
      this.submissions =  data;
      this.filteredSubmission = this.submissionLists;
    });

  }

  filterResults(text: string, email: string){
    if (!text && !email) {
      this.filteredSubmission = this.submissionLists;
      return;
    }

    this.filteredSubmission = this.submissionLists.filter(
      submissionList => submissionList['name']?.toLowerCase().includes(text.toLowerCase())
      && submissionList['email']?.toLowerCase().includes(email.toLowerCase())
    );
  }

}
