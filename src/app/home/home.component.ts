import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { AppConfigService } from "../services/app-config.service";
import { AppStateService } from "../services/app-state.service";
import {map} from "rxjs/operators";
import {Home} from "../models/home-response";

interface Response {
    results: []
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    constructor(private http: HttpService, private app: AppConfigService, public state: AppStateService) { }

    ngOnInit(): void {
        this.http.getData(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.app.apiKey}&language=${this.app.contentLanguage}`)
            .pipe(
                map( (res: any): Home[] => {
                    console.log('res', res);
                    return res.results;
                })
            )
            .subscribe( (observer: Home[]) => {
                this.state.home = observer;
                console.log('--- observer', observer);
        })
    }

}
