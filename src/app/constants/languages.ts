import { Injectable } from '@angular/core';
/*
 *
 */
const EN = 'en-EN',
    PL = 'pl-PL',
    DE = 'de-DE',
    FR = 'fr-FR';

@Injectable({
    providedIn: 'root',
})
export class Languages {
    public EN = EN;
    public PL = PL;
    public DE = DE;
    public FR = FR;

    constructor() { }
}
