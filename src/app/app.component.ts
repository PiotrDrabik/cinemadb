import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from "./constants/languages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'CinemaDB';
    constructor(private translate: TranslateService, private languages: Languages) {
        translate.setDefaultLang(languages.EN);
    }
}
