import { Injectable } from '@angular/core';
import { AlertModel } from "../models/alert-model";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    public listAlerts: AlertModel[] = [];
    constructor() { }
}
