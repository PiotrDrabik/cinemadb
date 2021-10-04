import { Component } from '@angular/core';
import { QueryUrlModel } from "../../models/query-url-model";
import { CbFunction } from "../../models/callbacks-model";
import { Observable, Subscription, throwError } from "rxjs";
import { BaseRes, BaseWrapper } from "../../models/base-response";
import { map } from "rxjs/operators";
import { HttpService } from "../../services/http.service";
import { AppConfigService } from "../../services/app-config.service";
import { AppStateService } from "../../services/app-state.service";
import { Router } from "@angular/router";
import { PersonResponseModel } from "../../models/person-response-model";
import { MediaResponseModel } from "../../models/media-response-model";

@Component({
    selector: 'app-builder-data',
    template: '',
    styles: []
})
export class BuilderDataComponent {
    public refreshSub: Subscription;

    constructor(public http: HttpService,
                public app: AppConfigService,
                public state: AppStateService,
                public router: Router) { }

    getData(queryUrl: QueryUrlModel, callback?: CbFunction | undefined): Observable<BaseRes[] | PersonResponseModel | MediaResponseModel> {
        return this.http.getData(this.http.generateUrl(queryUrl))
            .pipe(
                map( (res): BaseRes[] | PersonResponseModel | MediaResponseModel => {
                    if ("results" in res) {
                        callback && callback(res);
                        return res.results;
                    } else if ("gender" in res || "id" in res) {
                        return res;
                    } else {
                            throw new Error('error')
                    }
                })
            )
    }

    /*
     * method will be overwrite, each extending class can have different implementation
     */
    fetchFromObservable() {
        throw('Method should be overwrite in extending class.');
    }

    /*
     * data will be refreshed if refreshCalled$ was emitted
     */
    ngOnInit(): void {
        this.fetchFromObservable();
        this.refreshSub = this.app.refreshCalled$.subscribe(item => {
            this.fetchFromObservable();
        });
    }

    ngOnDestroy(): void {
        this.refreshSub.unsubscribe();
    }
}
