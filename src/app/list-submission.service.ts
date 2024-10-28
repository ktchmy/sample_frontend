import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListSubmissionService {
  url = "https://sample_backend.test/api/sample-submission/list";
  constructor(private http: HttpClient) { }
  getSubmissions(): Observable<any>{
    return this.http.get(this.url, {headers: {Accept:'application/json'}});
  }
}
