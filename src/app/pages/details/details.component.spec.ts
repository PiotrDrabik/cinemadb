import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {HttpService} from "../../services/http.service";
import {AppStateService} from "../../services/app-state.service";
import {AppConfigService} from "../../services/app-config.service";
import {AlertHelperComponent} from "../../resources/alert-helper/alert-helper.component";

describe('DetailsMediaComponent', () => {
    let component: DetailsComponent;
    let fixture: ComponentFixture<DetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ DetailsComponent ],
            imports: [ HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot() ],
            providers: [ HttpService, AppStateService, AppConfigService, AlertHelperComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test fetchFromObservable() queryParams', fakeAsync(() => {
        component.routeDetails = {
            param: '12345',
            type: 'movie'
        }
        // @ts-ignore
        component.getData = (queryCheck) => {

            expect(queryCheck).not.toEqual(jasmine.objectContaining({
                test: 'dummy'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'movie'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                mediaType: '12345'
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

    it('test fetchFromObservable() queryParams, type 1 equal person', fakeAsync(() => {
        component.routeDetails = {
            param: '12345',
            type: '1'
        }
        // @ts-ignore
        component.getData = (queryCheck) => {
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'person'
            }));
            return { subscribe: () => {} }
        };
        component.fetchFromObservable();
    }));

    it('test fetchFromObservable() queryParams, type 2 equal person', fakeAsync(() => {
        component.routeDetails = {
            param: '12345',
            type: '2'
        }
        // @ts-ignore
        component.getData = (queryCheck) => {
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'person'
            }));
            return { subscribe: () => {} }
        };
        component.fetchFromObservable();
    }));

    it('test fetchFromObservable() queryParams, type undefined equal movie', fakeAsync(() => {
        component.routeDetails = {
            param: '12345',
            type: 'undefined'
        }
        // @ts-ignore
        component.getData = (queryCheck) => {
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'movie'
            }));
            return { subscribe: () => {} }
        };
        component.fetchFromObservable();
    }));
});
