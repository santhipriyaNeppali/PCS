import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostcodeService } from 'src/app/services/postcode.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { suburb } from 'src/app/models/suburb.model';

@Component({
  selector: 'app-result-main',
  templateUrl: './result-main.component.html',
  styleUrls: ['./result-main.component.less']
})
export class ResultMainComponent implements OnInit {


  @Input() suburbsRef : Array<object> = [];
  @Input() nearbySuburbsRef : Array<Object> = [];
  selectedSub: suburb;
  suburbSubscriber: Subscription = new Subscription();
  suburbNearbySubscriber: Subscription = new Subscription();
  postcode : string; 
  

  constructor(public postCodeService : PostcodeService, 
      private spinner: NgxSpinnerService,
      public route: ActivatedRoute,
      private router: Router) { 
      }

  ngOnInit() {

      this.route.queryParams.subscribe((params) => {
      if (params['distance']) {
        this.spinner.show();
        
        this.selectedSub = this.postCodeService.getSelectedSuburb();
        const obj = Object.assign(this.selectedSub);
        obj.distance = params['distance'];

        this.suburbSubscriber = this.postCodeService.getSuburbsByDistance(obj).subscribe(res => {
          this.nearbySuburbsRef = res;
          console.log(res);
          this.spinner.hide();
        }, err => {
          console.log(err);
          this.router.navigate(['../../error']);
        });

      } else if(params['postcode']){
        this.spinner.show();
        this.postcode = params['postcode'];
        this.suburbSubscriber = this.postCodeService.getSuburbs(this.postcode).subscribe(res => {
          this.suburbsRef = res;
          this.nearbySuburbsRef = [];
          this.spinner.hide();
        }, err => {
          console.log(err);
          this.router.navigate(['../../error']);
        }
        );
      }
      
    });  
  }

  restData(){
    this.suburbsRef = [];
    this.nearbySuburbsRef = [];
  }

  ngOnDestroy(){
    this.suburbSubscriber.unsubscribe();
    this.suburbNearbySubscriber.unsubscribe();
    this.restData();
  }

}
