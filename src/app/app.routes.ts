import { Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {AppComponent} from "./app.component";
import {SubmissionComponent} from "./submission/submission.component";
import {DetailsComponent} from "./details/details.component";

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'dashboard', component: DashboardComponent, title:'List Submissions' },
  { path: 'submission', component: SubmissionComponent },
  { path: 'details/:id', component: DetailsComponent },
];
