import { Component } from '@angular/core';
import { HttpService } from "../services/http.service";
import { AppConfigService } from "../services/app-config.service";
import { AppStateService } from "../services/app-state.service";
import { BaseRes } from "../models/base-response";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { QueryUrlModel } from "../models/query-url-model";
import { BuilderDataComponent } from "../base-class/builder-data/builder-data.component";
import { PersonResponseModel } from "../models/person-response-model";
import { MediaResponseModel } from "../models/media-response-model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent extends BuilderDataComponent {
    public refreshSub: Subscription;

    constructor(public http: HttpService,
                public app: AppConfigService,
                public state: AppStateService,
                public router: Router) {
        super(http, app, state, router)
    }

    fetchFromObservable() {
        let queryTrending: QueryUrlModel = {
            baseAction: 'trending',
            mediaType: 'all/day',
            language: this.app.contentLanguage,
            query: undefined,
            page: undefined
        };

        this.getData(queryTrending).subscribe( (observer: BaseRes[] | PersonResponseModel | MediaResponseModel) => {
            if (Array.isArray(observer)) {
                this.state.home = observer;
            }
        })
        this.getAdditionalData();
    }

    getAdditionalData() {
        let today = new Date();
        let todayFormatted = `${today.getFullYear()}-`+
                            `${String(today.getMonth() + 1).padStart(2, '0')}-`+
                            `${String(today.getDate()).padStart(2, '0')}`
        let queryDiscover: QueryUrlModel = {
            baseAction: 'discover',
            mediaType: 'movie',
            language: this.app.contentLanguage,
            query: '&region=PL&sort_by=release_date.asc',
            append: `&release_date.gte=${todayFormatted}&with_watch_monetization_types=flatrate`,
            page: undefined
        };
        this.getData(queryDiscover).subscribe( (observer: BaseRes[] | PersonResponseModel | MediaResponseModel) => {
            if (Array.isArray(observer)) {
                this.state.discover = observer;
            }
        })
    }
}
