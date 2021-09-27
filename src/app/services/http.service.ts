import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AlertHelperComponent } from "../resources/alert-helper/alert-helper.component";
import { AppConfigService } from "./app-config.service";
import { QueryUrlModel } from "../models/query-url-model";
import {BaseRes} from "../models/base-response";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient,
                private alertHelper: AlertHelperComponent,
                private app: AppConfigService) { }

    getData(url: string): Observable<{'results': BaseRes[]} | object> {
        return this.http.get(url)
            .pipe(
                catchError(this.handleError.bind(this))
            );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = 'The indicated server is not reached.';
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            errorMessage = `Backend returned code ${error.status}, message: ` +
                           `"${typeof error.error === "string" ? error.error : error.error.errors[0]}"`;
        }
        // Return an observable with a user-facing error message.
        this.alertHelper.addAlert({title: 'An error occurred. Please try again later.', message: errorMessage});

        return throwError('Please try again later.');
    }

    public generateUrl(queryUrl: QueryUrlModel): string {
        let action = `${queryUrl.baseAction}/${queryUrl.mediaType}`;
        let page = queryUrl.page ? `&page=${queryUrl.page}` : '';
        let append = queryUrl.append ? `&${queryUrl.append}` : '';
        let apiKey = `?api_key=${this.app.apiKey}`;
        let language = `&language=${queryUrl.language}`;
        let query = `&query=${queryUrl.query}`;

        // search URL
        return `${this.app.host}${action}${apiKey}${language}${query}${page}${append}&include_adult=false`;
    }
}
