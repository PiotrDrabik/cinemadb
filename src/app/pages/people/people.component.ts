import { Component } from '@angular/core';
import { BuilderDataComponent } from "../../base-class/builder-data/builder-data.component";
import { QueryUrlModel } from "../../models/query-url-model";
import { BaseRes } from "../../models/base-response";
import { HttpService } from "../../services/http.service";
import { AppConfigService } from "../../services/app-config.service";
import { AppStateService } from "../../services/app-state.service";
import { Router } from "@angular/router";
import { PersonResponseModel } from "../../models/person-response-model";
import { MediaResponseModel } from "../../models/media-response-model";

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styles: [`

   `]
})
export class PeopleComponent extends BuilderDataComponent {

    constructor(public http: HttpService,
                public app: AppConfigService,
                public state: AppStateService,
                public router: Router) {
        super(http, app, state, router)
    }

    fetchFromObservable() {
        let queryUrl: QueryUrlModel = {
            baseAction: 'person',
            mediaType: 'popular',
            language: this.app.contentLanguage,
            query: undefined,
            page: undefined
        }

        this.getData(queryUrl).subscribe( (observer: BaseRes[] | PersonResponseModel | MediaResponseModel) => {
            if (Array.isArray(observer)) {
                this.state.people = observer;
            }
        })
    }
}
