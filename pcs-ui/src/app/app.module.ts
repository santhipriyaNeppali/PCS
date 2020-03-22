import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostcodeService } from './services/postcode.service';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchFormComponent } from './views/search-form/search-form.component';
import { ResultViewComponent } from './views/result-view/result-view.component';
import { ResultMainComponent } from './views/result-main/result-main.component';
import { LocationItemComponent } from './views/result-view/location-item/location-item.component';
import { ErrorpageComponent } from './views/errorpage/errorpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { GpsModalComponent } from './views/result-view/gps-modal/gps-modal.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultViewComponent,
    ResultMainComponent,
    LocationItemComponent,
    ErrorpageComponent,
    GpsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule 
  ],
  entryComponents: [GpsModalComponent],
  providers: [PostcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
