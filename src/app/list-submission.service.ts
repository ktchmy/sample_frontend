import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListSubmissionService {
  url = "https://sample_backend.test/api/sample-submission/";
  constructor(private http: HttpClient) { }
  getSubmissions(): Observable<any>{
    const headers = new HttpHeaders({ 'Accept':'application/json' });
    return this.http.get(this.url+'list', {headers});
  }

  createSubmission(submission: any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Accept':'application/json' });
    //Change from Json to x-form-encode to pass thru
    const body = 'name=' + submission.name + '&email=' + submission.email +'&message=' + submission.message + '&file=' + submission.file;
    return this.http.post(this.url+'add',  body, {headers});
  }

  getSubmission(id:number): Observable<any>{
    const headers = new HttpHeaders({ 'Accept':'application/json' });
    return this.http.get(this.url+'get/'+id, {headers});
  }

  updateSubmission(id: number, submission: any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Accept':'application/json' });
    //Change from Json to x-form-encode to pass thru
    const body = 'id=' + id + '&name=' + submission.name + '&email=' + submission.email +'&message=' + submission.message + '&file=' + submission.file;
    return this.http.post(this.url+'update/'+id,  body, {headers});
  }

  deleteSubmission(id: number, submission: any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Accept':'application/json' });
    //Change from Json to x-form-encode to pass thru
    const body = 'id=' + id + '&name=' + submission.name + '&email=' + submission.email +'&message=' + submission.message + '&file=' + submission.file;
    return this.http.post(this.url+'delete/'+id,  body, {headers});
  }
}
