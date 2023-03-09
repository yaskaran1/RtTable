import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { RtTableComponent } from './rt-table/rt-table.component';
import { ParentComponent } from './home/parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    RtTableComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
