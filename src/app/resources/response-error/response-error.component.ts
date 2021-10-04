import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-response-error',
    template: `
        <div class="container mt-4">
            <div class="row gradient-border p-5">
                <div id="error-message" class="col">
                    <i class="far fa-sad-tear fa-3x"></i>
                    <span class="h5 ps-3">{{ errorMessageTranslationPath | translate }}</span>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./response-error.component.scss']
})
export class ResponseErrorComponent {
    @Input() errorMessageTranslationPath: string

    constructor() { }
}
