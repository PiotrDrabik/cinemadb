import { Component, Input, OnInit } from '@angular/core';
import { PersonResponseModel } from "../../models/person-response-model";
import { AppConfigService } from "../../services/app-config.service";

@Component({
    selector: 'template-details-person',
    templateUrl: './details-person.component.html',
    styleUrls: ['./details-common-styles.scss']
})
export class DetailsPersonComponent implements OnInit {
    @Input() item: PersonResponseModel;

    constructor(public app: AppConfigService) { }

    ngOnInit(): void {
    }

}
