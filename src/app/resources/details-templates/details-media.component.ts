import { Component, Input, OnInit } from '@angular/core';
import { MediaResponseModel } from "../../models/media-response-model";
import { AppConfigService } from "../../services/app-config.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
    selector: 'template-details-media',
    templateUrl: './details-media.component.html',
    styleUrls: ['./details-common-styles.scss']
})
export class DetailsMediaComponent implements OnInit {
    @Input() item: MediaResponseModel;
    public readonly INTERVAL = 10;
    castVisible: number;

    constructor(public app: AppConfigService,
                private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.castVisible = this.INTERVAL;
    }

    showMoreCast(): void {
        if (this.castVisible + this.INTERVAL > this.item.credits?.cast.length) {
            this.castVisible = this.item.credits.cast.length;
        } else {
            this.castVisible = this.castVisible + this.INTERVAL;
        }
    }

    getSanitizedUrl(url: string): SafeUrl {
        let newUrl = this.app.hostYoutube + url;
        return this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
    }
}
