import { Component } from '@angular/core';
import { HttpService } from "../../services/http.service";
import { AppConfigService } from "../../services/app-config.service";
import { AppStateService } from "../../services/app-state.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { BuilderDataComponent } from "../../base-class/builder-data/builder-data.component";
import { QueryUrlModel } from "../../models/query-url-model";
import { BaseRes } from "../../models/base-response";
import { DetailsParamModel } from "../../models/details-param-model"
import { PersonResponseModel } from "../../models/person-response-model";
import { MediaResponseModel } from "../../models/media-response-model";

@Component({
  selector: 'app-details-media',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent extends BuilderDataComponent {
    routeDetails: DetailsParamModel;

    constructor(public http: HttpService,
                public app: AppConfigService,
                public state: AppStateService,
                public router: Router,
                private route: ActivatedRoute,
                public translate: TranslateService) {
        super(http, app, state, router)

        this.route.params.subscribe(searched => {
            this.routeDetails = {
                param: searched.param,
                type: searched.type
            };
            this.fetchFromObservable();
        });
    }

    fetchFromObservable() {
        let baseAction: string = '';

        switch (this.routeDetails.type) {
            case 'person':
            case '1':
            case '2':
                baseAction = 'person';
                break;
            case 'movie':
            case 'undefined':
                baseAction = 'movie';
                break;
            case 'tv':
                baseAction = 'tv';
                break;
        }
        let queryUrl: QueryUrlModel = {
            baseAction: baseAction,
            mediaType: this.routeDetails.param,
            language: this.app.contentLanguage,
            query: undefined,
            page: undefined,
            append: 'append_to_response=videos,images,credits'
        }
        this.state.detailsPerson = undefined;
        this.state.detailsMedia = undefined;

        this.getData(queryUrl).subscribe( (observer: BaseRes[] | PersonResponseModel | MediaResponseModel) => {
            if ("gender" in observer) {
                this.state.detailsPerson = observer;
            } else if ("id" in observer) {
                this.state.detailsMedia = observer;
            }
        })
    }
}
