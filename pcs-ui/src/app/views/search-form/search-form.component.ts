import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostcodeService } from 'src/app/services/postcode.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { suburb } from 'src/app/models/suburb.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent implements OnInit {

  postcode : FormControl =  new FormControl('', [Validators.required,
    Validators.minLength(3), 
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  searchForm = new FormGroup({postcode:this.postcode});

  constructor( public router: Router, public route: ActivatedRoute){
  }

  ngOnInit(){
  }

  onSubmit(){
    this.router.navigate(['suburbs'], { queryParams: {postcode : this.postcode.value}, relativeTo: this.route});
  }

 

}
