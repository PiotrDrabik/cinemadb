import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    private API_KEY = '954c18cc88ea0261cff37fd23473f0be';
    private language = 'en-EN';
    private flag = 'EN';
    private HOST = 'https://api.themoviedb.org/3/';
    private HOST_IMAGES = 'https://image.tmdb.org/t/p/';
    private QUALITY_IMAGE_STANDARD = 'w500/';
    private QUALITY_IMAGE_ORIGINAL = 'original/';
    public readonly QUALITY_IMAGE = {
        ORIGINAL: this.QUALITY_IMAGE_ORIGINAL,
        STANDARD: this.QUALITY_IMAGE_STANDARD
    }

    refreshCalled$ = new Subject<boolean>();

    constructor() { }

    get apiKey(): string {
        return this.API_KEY;
    }

    get host(): string {
        return this.HOST;
    }

    get hostImage(): string {
        return this.HOST_IMAGES;
    }

    set contentLanguage(value: string) {
        this.language = value;
    }

    get contentLanguage(): string {
        return this.language;
    }

    set activeFlag(value: string) {
        this.flag = value;
    }

    get activeFlag(): string {
        return this.flag;
    }
}
