import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListSubmissionService {
  url = "https://sample_backend.test/api/sample-submission/list";
  createUrl = "https://sample_backend.test/api/sample-submission/add";
  getUrl = "https://sample_backend.test/api/sample-submission/get/";
  updateUrl = "https://sample_backend.test/api/sample-submission/update/";
  constructor(private http: HttpClient) { }
  getSubmissions(): Observable<any>{
    const headers = new HttpHeaders({ 'Accept':'application/json' });
    return this.http.get(this.url, {headers});
  }

  createSubmission(submission: any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Accept':'application/json' });
    //Change from Json to x-form-encode to pass thru
    const body = 'name=' + submission.name + '&email=' + submission.email +'&message=' + submission.message + '&file=' + submission.file;
    return this.http.post(this.createUrl,  body, {headers});
  }

  getSubmission(id:number): Observable<any>{
    const headers = new HttpHeaders({ 'Accept':'application/json' });
    return this.http.get(this.getUrl+id, {headers});
  }

  updateSubmission(id: number, submission: any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Accept':'application/json' });
    //Change from Json to x-form-encode to pass thru
    const body = 'id=' + id + '&name=' + submission.name + '&email=' + submission.email +'&message=' + submission.message + '&file=' + submission.file;
    return this.http.post(this.updateUrl+id,  body, {headers});
  }
}
