import { Component, Input } from '@angular/core';
import { BaseRes } from "../../models/base-response";
import { AppConfigService } from "../../services/app-config.service";

@Component({
    selector: 'app-single-item-images',
    templateUrl: './single-item-images.component.html',
    styleUrls: ['./single-item-images.component.scss']
})
export class SingleItemImagesComponent {
    @Input() item: BaseRes;
    posterLoaded: boolean | undefined;
    backdropLoaded: boolean | undefined;

    constructor(public app: AppConfigService) { }

    loadCompleted(image: {poster?: boolean, backdrop?: boolean}) {
        let {poster, backdrop} = image;
        if (poster === true) {
            this.posterLoaded = true;
        }
        if (backdrop === true) {
            this.backdropLoaded = true;
        }
    }
}
