import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { AppStateService } from "../../services/app-state.service";
import { AppConfigService } from "../../services/app-config.service";
import { HttpService } from "../../services/http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AlertHelperComponent } from "../../resources/alert-helper/alert-helper.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe('MoviesComponent', () => {
    let component: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ MoviesComponent ],
            imports: [ HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot() ],
            providers: [ HttpService, AppStateService, AppConfigService, AlertHelperComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviesComponent);
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
                baseAction: 'trending'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                mediaType: 'movie/day'
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
