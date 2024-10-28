import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListSubmissionService} from "../list-submission.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  submissionID = 0;

  detailsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('',Validators.required),
    image_url: new FormControl(''),
  });

  constructor(
    private submissionServices: ListSubmissionService,
    private router: Router
    ) {
    const sid = Number(this.route.snapshot.params['id']);
    this.submissionID = Number(this.route.snapshot.params['id']);
    this.submissionServices.getSubmission(sid).subscribe((data:any)=>{
      this.detailsForm.patchValue({
        name: data.name,
        email: data.email,
        message: data.message,
      });
    });
  }

  updateSubmission(){
    this.submissionServices.updateSubmission(this.submissionID, this.detailsForm.value).subscribe((data:any)=>{
      console.log(data);
    })
  };

  deleteSubmission(){
    this.submissionServices.deleteSubmission(this.submissionID, this.detailsForm.value).subscribe((data:any)=>{
      if(data.success){
        this.router.navigate(['/dashboard']);
        // return false;
      }else{
        console.log(data);
      }
    })
  };
}
