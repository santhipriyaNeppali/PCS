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

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultViewComponent,
    ResultMainComponent,
    LocationItemComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [PostcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
