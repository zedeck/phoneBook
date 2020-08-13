import { EntryDetailService } from './../../shared/entry-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styles: []
})
export class EntryDetailComponent implements OnInit {

  constructor(public service:EntryDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    
      this.service.formData = {
      Id : 0,
      Name : '',
      PhoneNumber: ''
    }
  }
  onSubmit(form:NgForm){
    this.service.postEntryDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Contact Saved!','Create Contact');
      },
      err => {
        console.log(err);
      }
    )
  }
  
}
