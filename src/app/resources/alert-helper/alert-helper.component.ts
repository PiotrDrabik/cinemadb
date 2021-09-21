import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../services/alert.service";
import { AlertModel } from '../../models/alert-model';

@Component({
    selector: 'app-alert',
    templateUrl: './alert-helper.component.html',
    styleUrls: ['./alert-helper.component.scss']
})
export class AlertHelperComponent implements OnInit {

    constructor(public alertService: AlertService) { }

    ngOnInit(): void { }

    /*
     * multiple alerts can be displayed, each will be removed after 5 sec.
     */
    addAlert(singleAlert: AlertModel) {
        this.alertService.listAlerts.push(singleAlert);
        setTimeout (() => {
            this.alertService.listAlerts.shift();
        }, 5000);
    }

}
