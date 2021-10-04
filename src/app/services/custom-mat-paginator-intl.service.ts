import { Injectable, OnDestroy } from '@angular/core';
import { MatPaginatorIntl } from "@angular/material/paginator";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

/*
 * Paginator Service needed for translation Angular Material Pagination
 * https://material.angular.io/components/paginator/overview
 */

@Injectable()
export class CustomMatPaginatorIntlService extends MatPaginatorIntl implements OnDestroy {
    of: string;
    subscription: Subscription;

    constructor(private translate: TranslateService) {
        super();

        this.subscription = this.translate.onLangChange
            .subscribe(() => {
                this.getAndInitTranslations();
            });
        this.getAndInitTranslations();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getAndInitTranslations() {
        this.translate
            .get([
                'paginator.items-per-page',
                'paginator.next-page',
                'paginator.previous-page',
                'paginator.of',
            ])
            .subscribe(translation => {
                this.itemsPerPageLabel = translation['paginator.items-per-page'];
                this.nextPageLabel = translation['paginator.next-page'];
                this.previousPageLabel = translation['paginator.previous-page'];
                this.of = translation['paginator.of'];

                this.changes.next();
            });
    }

    getRangeLabel = (page: number, pageSize: number, length: number): string => {
        if (length === 0 || pageSize === 0) {
            return `0 ${this.of} ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length)
                : startIndex + pageSize;

        return `${startIndex + 1} - ${endIndex} ${this.of} ${length}`;
    };
}
