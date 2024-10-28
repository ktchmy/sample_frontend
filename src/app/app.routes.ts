import { Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {AppComponent} from "./app.component";
import {SubmissionComponent} from "./submission/submission.component";

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'submission', component: SubmissionComponent },
];
