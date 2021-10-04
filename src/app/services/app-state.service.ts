import { Injectable } from '@angular/core';
import { BaseRes } from "../models/base-response";
import { PersonResponseModel } from "../models/person-response-model";
import { MediaResponseModel } from "../models/media-response-model";

@Injectable({
    providedIn: 'root'
})
export class AppStateService {
    public home: BaseRes[];
    public search: BaseRes[];
    public people: BaseRes[];
    public discover: BaseRes[];
    public movies: BaseRes[];
    public series: BaseRes[];
    public detailsPerson: PersonResponseModel | undefined;
    public detailsMedia: MediaResponseModel | undefined;

    constructor() { }
}
