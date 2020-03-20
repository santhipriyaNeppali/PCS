import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { suburb } from '../models/suburb.model';
import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root',
  })

export class PostcodeService {

    private selectedSuburb: suburb;

   

    constructor(private http: HttpClient) { }

    getSuburbs (postcode : string): Observable<any> {
        return this.http.get<any>(BACKEND_URL+"/"+postcode);
    }

    getSuburbsByDistance (obj : any) : Observable<any> {
        return this.http.get<any>(BACKEND_URL+"/"+obj.latitude+"/"+obj.longitude+"/"+obj.distance);
    }

    getSelectedSuburb(){
        return this.selectedSuburb;
    }

    setSelectedSuburb(suburb){
        this.selectedSuburb = suburb;
    }
}

