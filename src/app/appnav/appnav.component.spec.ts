import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AppNavComponent } from './appnav.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe('App.NavComponent', () => {
    let component: AppNavComponent;
    let fixture: ComponentFixture<AppNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: TranslateFakeLoader
                    }
                }),
                RouterTestingModule
            ],
            providers: [],
            declarations: [ AppNavComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.searchForm.valid).toBeFalsy();
    });

    it('form is valid because value is set and length 4', () => {
        let searchInput = component.searchForm.controls['search'];
        searchInput.setValue("test");
        expect(searchInput.valid).toBeTruthy();
    });

    it('searchInput field validation', () => {
        let searchInput = component.searchForm.controls['search'];
        expect(searchInput.valid).toBeFalsy();
    });

    it('searchInput error is required', () => {
        let errors: Partial<{ [key: string]: string}> = {};
        let searchInput = component.searchForm.controls['search'];
        errors = searchInput.errors || {};
        expect(errors['required']).toBeTruthy();
    });

    it('searchInput error is minLength', () => {
        let errors: Partial<{ [key: string]: string}> = {};
        let searchInput = component.searchForm.controls['search'];
        searchInput.setValue("t");
        errors = searchInput.errors || {};
        expect(errors['minlength']).toBeTruthy();
    });

    it('test changeLanguage, should set de-DE', () => {
        component.changeLanguage('de-DE');
        expect(component.app.contentLanguage).toEqual('de-DE');
    });

    it('test activeFlag, should set de-DE', () => {
        component.changeLanguage('de-DE');
        component.app.activeFlag;
        expect(component.app.activeFlag).toEqual('DE');
    });
});

describe('test App.nav onSubmit()', () => {
    let component: AppNavComponent;
    let fixture: ComponentFixture<AppNavComponent>;
    let routerSpy = {navigate: jasmine.createSpy('navigate')};

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: TranslateFakeLoader
                    }
                }),
            ],
            providers: [
                { provide: Router, useValue: routerSpy }
            ],
            declarations: [ AppNavComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('test onSubmit', () => {
        let searchInput = component.searchForm.controls['search'];
        searchInput.setValue("test");
        component.onSubmit();

        expect (routerSpy.navigate).toHaveBeenCalledWith([ '/search', 'test' ]);
    });
});
