import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormbarComponent } from './formbar/formbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {SafePipe} from './pipes/safe.pipe';
import { FilterPipe } from './pipes/filter.pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormbarComponent,
    SafePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
