import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {ListSubmissionService} from "../list-submission.service";

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css'
})
export class SubmissionComponent {
  submission = [];
  type = '';
  resMessage ='';
  submissionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('',Validators.required),
    image_url: new FormControl(''),
  });

  constructor(private submissionService: ListSubmissionService) {}
  handleSubmit(){
    this.submissionService.createSubmission(this.submissionForm.value).subscribe((data:any)=>{
       console.log(data);
      if(data.success){
        this.type = 'success';
        this.resMessage = data.message;
        this.submissionForm.reset();
      }else{
        this.type = 'alert';
        this.resMessage = data.message;
      }
    });

  };
}
