import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from "rxjs";
import { BaseRes } from "../../models/base-response";
import { QueryUrlModel } from "../../models/query-url-model";
import { CbResponse } from "../../models/callbacks-model";
import { HttpService } from "../../services/http.service";
import { AppConfigService } from "../../services/app-config.service";
import { AppStateService } from "../../services/app-state.service";
import { BuilderDataComponent } from "../../base-class/builder-data/builder-data.component";
import { PersonResponseModel } from "../../models/person-response-model";
import { MediaResponseModel } from "../../models/media-response-model";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent extends BuilderDataComponent {
    public refreshSub: Subscription;
    public searchedTerm: string;

    // MatPaginator Inputs
    length = 0;
    pageSize = 20;
    pageIndex = 1;

    // MatPaginator Output
    pageEvent: PageEvent;

    constructor(public http: HttpService,
                public app: AppConfigService,
                public state: AppStateService,
                public router: Router,
                private route: ActivatedRoute,
                public translate: TranslateService) {
        super(http, app, state, router)

        this.route.params.subscribe(searched => {
            this.searchedTerm = searched.param;
            this.fetchFromObservable();
        });
    }

    fetchFromObservable() {
        let queryUrl: QueryUrlModel = {
            baseAction: 'search',
            mediaType: 'multi',
            language: this.app.contentLanguage,
            query: this.searchedTerm,
            page: this.pageIndex
        };
        this.getData(queryUrl, this.setResponseLength.bind(this))
            .subscribe( (observer: BaseRes[] | PersonResponseModel | MediaResponseModel) => {
                if (Array.isArray(observer)) {
                    this.state.search = observer;
                }
            })
    }

    /*
     * for pagination, set all items
     */
    setResponseLength(res: CbResponse): void {
        this.length = res.total_results;
    }

    public pageChange(event: PageEvent): PageEvent {
        // event.pageIndex returns correct number counting from 0
        this.pageIndex = event.pageIndex + 1;
        this.fetchFromObservable();

        return event;
    }
}
