import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { HttpService } from "../services/http.service";
import { AppStateService } from "../services/app-state.service";
import { AppConfigService } from "../services/app-config.service";
import { AlertHelperComponent } from "../resources/alert-helper/alert-helper.component";

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ HomeComponent ],
            imports: [ HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot() ],
            providers: [ HttpService, AppStateService, AppConfigService, AlertHelperComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test fetchFromObservable() queryParams', fakeAsync(() => {
        // overwrite getAdditionalData it will be tested in another scenario
        component.getAdditionalData = () => {};
        // @ts-ignore
        component.getData = (queryCheck) => {

            expect(queryCheck).not.toEqual(jasmine.objectContaining({
                test: 'dummy'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'trending'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                mediaType: 'all/day'
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

    it('test getAdditionalData() queryParams', fakeAsync(() => {
        // @ts-ignore
        component.getData = (queryCheck) => {

            expect(queryCheck).not.toEqual(jasmine.objectContaining({
                test: 'dummy'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'discover'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                mediaType: 'movie'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                language: 'en-EN'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                query: '&region=PL&sort_by=release_date.asc'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                page: undefined
            }));

            return { subscribe: () => {} }
        };
        component.getAdditionalData();
    }));
});
