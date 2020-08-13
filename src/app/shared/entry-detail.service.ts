import { EntryDetail } from './entry-detail.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntryDetailService {
  formData:EntryDetail;
  readonly rootURL = 'http://localhost:64172/api';
  constructor(private http:HttpClient) { }
  
  postEntryDetail(formData:EntryDetail){
    return this.http.post(this.rootURL+'/Entries', formData)
  }

}
