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
  noSuburbsFound: boolean = false; 
  displayResults: boolean = false;
  
  constructor(private postCodeService : PostcodeService, 
      private spinner: NgxSpinnerService,
      private route: ActivatedRoute,
      private router: Router) { 
      }

  ngOnInit() {

      this.resetData();

      this.route.queryParams.subscribe((params) => {
      if (params['distance']) {
         this.spinner.show();
        //To fetch the suburbs within given range of selected cities
        this.suburbSubscriber = this.postCodeService.getSuburbsByDistance(params['distance'])
        .subscribe(res => {
          this.nearbySuburbsRef = res;
          this.selectedSub = this.postCodeService.getSelectedSuburb();
          this.spinner.hide();
        }, err => {
          console.log(err);
          this.router.navigate(['../../error']);
        });

      } else if(params['postcode']){
        //To fetch suburbs with given postcode
        this.postcode = params['postcode'];
        this.spinner.show();

        this.suburbSubscriber = this.postCodeService.getSuburbs(this.postcode)
        .subscribe(res => {
          this.resetData();
          this.suburbsRef = res;
          this.spinner.hide();
          this.displayResults = true;
          if(Array.isArray(res) && res.length == 0){
            this.noSuburbsFound = true;
          }
        }, err => {
          console.log(err);
          this.router.navigate(['../../error']);
        }
        );
      }else{
        this.router.navigate(['/']);
      }
    });  
  }

  resetData(){
    this.nearbySuburbsRef = [];
    this.noSuburbsFound = false;
    this.displayResults = false;
    this.selectedSub = undefined;
  }

  ngOnDestroy(){
    this.suburbSubscriber.unsubscribe();
    this.suburbNearbySubscriber.unsubscribe();
    this.resetData();
  }

}
