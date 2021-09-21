import { Injectable } from '@angular/core';
/*
 *
 */
const US = 'en-EN',
    PL = 'pl-PL',
    DE = 'de-DE',
    FR = 'fr-FR';

@Injectable({
    providedIn: 'root',
})
export class Languages {
    public US = US;
    public PL = PL;
    public DE = DE;
    public FR = FR;

    constructor() { }
}
