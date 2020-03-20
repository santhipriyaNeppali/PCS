import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostcodeService } from 'src/app/services/postcode.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { suburb } from 'src/app/models/suburb.model';


@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.less']
})
export class ResultViewComponent implements OnInit {

  @Input() suburbs: Array<object> = [];
  selectedSuburb : suburb;

  ngOnInit(){
  }
  
  constructor(public postCodeService : PostcodeService, 
    private spinner: NgxSpinnerService,
    public route: ActivatedRoute,
    public router: Router) { 
      this.selectedSuburb = this.postCodeService.getSelectedSuburb();
    }


  onSuburbSelect($event, suburb){
    this.selectedSuburb = suburb;
    this.postCodeService.setSelectedSuburb(suburb);
    this.router.navigate(['radius'], { queryParams: { distance: 4000, name: suburb.name }, relativeTo: this.route});
  }

  isLinkActive(name){
    return name === this.selectedSuburb && this.selectedSuburb.name;
  }
}
