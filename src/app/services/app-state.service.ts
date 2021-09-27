import { Injectable } from '@angular/core';
import { BaseRes } from "../models/base-response";

@Injectable({
    providedIn: 'root'
})
export class AppStateService {

    public home: BaseRes[];
    public search: BaseRes[];
    constructor() { }
}
