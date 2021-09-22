import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    private API_KEY = '954c18cc88ea0261cff37fd23473f0be';
    private language = 'en-EN'
    private flag = 'EN'

    refreshCalled$ = new Subject<boolean>();

    constructor() { }

    get apiKey() {
        return this.API_KEY;
    }

    set contentLanguage(value: string) {
        this.language = value;
    }

    get contentLanguage() {
        return this.language;
    }

    set activeFlag(value: string) {
        this.flag = value;
    }

    get activeFlag() {
        return this.flag;
    }
}
