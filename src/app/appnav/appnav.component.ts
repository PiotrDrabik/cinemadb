import { Component, OnInit } from '@angular/core';
import { AppConfigService } from "../services/app-config.service";
import { Languages } from "../constants/languages"
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
    selector: 'appnav',
    templateUrl: './appnav.component.html',
    styleUrls: ['./appnav.component.scss']
})
export class AppNavComponent implements OnInit {
    searchForm: FormGroup;
    constructor(public app: AppConfigService,
                public languages: Languages,
                public translate: TranslateService,
                private router: Router) { }

    ngOnInit(): void {
        this.searchForm = new FormGroup({
            search: new FormControl('',
                [Validators.required, Validators.minLength(2)]
            )
        });
    }

    changeLanguage(lang: string) {
        // set new language and flag
        this.app.contentLanguage = lang;
        this.app.activeFlag = lang.substring(lang.length - 2);
        // change local translation
        this.translate.use(lang);
        // call refresh for subscribers
        this.app.refreshCalled$.next(true);
    }

    onSubmit() {
        if (this.searchForm.status === 'VALID') {
            this.router.navigate(['/search', this.searchForm.value.search]);
        }
    }
}
