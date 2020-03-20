import { Component } from '@angular/core';
import { PostcodeService } from './services/postcode.service';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'Austrlian PostCode Search';
  }
 
