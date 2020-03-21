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

    /**
     * Returns the observer of which gives the 
     * list of suburbs with given postcode from
     * rest API
     * @param string  postcode Postcode
     */
    getSuburbs (postcode : string): Observable<any> {
        return this.http.get<any>(BACKEND_URL+"/"+postcode);
    }

    /**
     * Returns the observer of which gives the 
     * list of suburbs within given distance from selected suburb
     * from rest API
     * @param number distance Distance
     */
    getSuburbsByDistance (distance : number) : Observable<any> {
        return this.http.get<any>(BACKEND_URL+"/"+this.selectedSuburb.latitude+"/"
        +this.selectedSuburb.longitude+"/"+distance);
    }

    /**
     * Returns the selected suburb
    */
    getSelectedSuburb(){
        return this.selectedSuburb;
    }

    /**
     * Sets the selected suburb
     * @param suburb selected suburb
     */
    setSelectedSuburb(suburb){
        this.selectedSuburb = suburb;
    }
}

