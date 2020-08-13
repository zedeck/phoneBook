import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { EntryDatailsComponent } from './entry-datails/entry-datails.component';
import { EntryDetailComponent } from './entry-datails/entry-detail/entry-detail.component';
import { EntryDetailListComponent } from './entry-datails/entry-detail-list/entry-detail-list.component';
import { EntryDetailService } from './shared/entry-detail.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    EntryDatailsComponent,
    EntryDetailComponent,
    EntryDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EntryDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
