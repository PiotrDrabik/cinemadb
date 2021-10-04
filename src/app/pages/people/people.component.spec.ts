import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { PeopleComponent } from './people.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { HttpService } from "../../services/http.service";
import { AppStateService } from "../../services/app-state.service";
import { AppConfigService } from "../../services/app-config.service";
import { AlertHelperComponent } from "../../resources/alert-helper/alert-helper.component";

describe('PeopleComponent', () => {
    let component: PeopleComponent;
    let fixture: ComponentFixture<PeopleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PeopleComponent ],
            imports: [ HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot() ],
            providers: [ HttpService, AppStateService, AppConfigService, AlertHelperComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PeopleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test fetchFromObservable() queryParams', fakeAsync(() => {
        // @ts-ignore
        component.getData = (queryCheck) => {

            expect(queryCheck).not.toEqual(jasmine.objectContaining({
                test: 'dummy'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'person'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                mediaType: 'popular'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                language: 'en-EN'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                query: undefined
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                page: undefined
            }));

            return { subscribe: () => {} }
        };
        component.fetchFromObservable();
    }));
});
