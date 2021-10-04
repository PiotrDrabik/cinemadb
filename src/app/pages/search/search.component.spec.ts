import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { HttpService } from "../../services/http.service";
import { AppStateService } from "../../services/app-state.service";
import { AppConfigService } from "../../services/app-config.service";
import { AlertHelperComponent } from "../../resources/alert-helper/alert-helper.component";

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SearchComponent ],
            imports: [ HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot() ],
            providers: [ HttpService, AppStateService, AppConfigService, AlertHelperComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test pageChange, should call fetchFromObservable', () => {
        let newPage = {
            pageIndex: 2,
            pageSize: 20,
            length: 100
        }
        spyOn(component, 'fetchFromObservable');
        component.pageChange(newPage);
        expect(component.fetchFromObservable).toHaveBeenCalled();
    });

    it('test pageChange, should set pageIndex', () => {
        let newPage = {
            pageIndex: 2,
            pageSize: 20,
            length: 100
        }
        component.pageChange(newPage);
        expect(component.pageIndex).toEqual(newPage.pageIndex + 1);
    });

    it('test fetchFromObservable() queryParams', fakeAsync(() => {
        component.pageIndex = 1;
        // @ts-ignore
        component.getData = (queryCheck) => {

            expect(queryCheck).not.toEqual(jasmine.objectContaining({
                test: 'dummy'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                baseAction: 'search'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                mediaType: 'multi'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                language: 'en-EN'
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                query: undefined
            }));
            expect(queryCheck).toEqual(jasmine.objectContaining({
                page: 1
            }));

            return { subscribe: () => {} }
        };
        component.fetchFromObservable();
    }));

    it('test setResponseLength, should set this.length', () => {
        let expectedValue = 100;
        component.setResponseLength( {total_results: expectedValue} );
        expect(component.length).toEqual(expectedValue);
    });
});
