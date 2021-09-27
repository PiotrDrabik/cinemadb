import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemImagesComponent } from './single-item-images.component';
import { BaseRes } from "../../models/base-response";
import { TranslateModule } from "@ngx-translate/core";
import { StringCutPipe } from "../pipe/string-cut.pipe";

describe('SingleItemImagesComponent', () => {
    let component: SingleItemImagesComponent;
    let fixture: ComponentFixture<SingleItemImagesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SingleItemImagesComponent, StringCutPipe ],
            imports: [ TranslateModule.forRoot() ],
            providers: []
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleItemImagesComponent);
        component = fixture.componentInstance;

        // test data
        let baseResTest: BaseRes = {
            name: 'extra movie',
            backdrop_path: 'test/image_path_1.jpg',
            id: 123,
            media_type: 'movie',
            overview: 'This is the overview of the movie.',
            release_date: '2021-11-20'
        };
        component.item = baseResTest;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test @input and view, title should be equal provided text', () => {
        const element: HTMLElement = fixture.nativeElement;

        const testTitle = element.querySelector('div.title > div')!;
        expect(testTitle.textContent).toEqual('extra movie');
    });

    it('test @input and view, image poster should be hidden', () => {
        const element: HTMLElement = fixture.nativeElement;

        const testImg = element.querySelector('app-single-item-images > img')!;
        expect(testImg).toBeNull();
    });

    it('test @input and view, div .bottom-area should be visible', () => {
        const element: HTMLElement = fixture.nativeElement;

        const testBottomArea = element.querySelector('.bottom-area')!;
        expect(testBottomArea).not.toBeNull();
    });

    it('test @input and view, icon should have class "fa-film"', () => {
        const element: HTMLElement = fixture.nativeElement;

        const testIcon = element.querySelector('div.bottom-area > i')!;
        expect(testIcon).toHaveClass('fa-film');
    });

    it('test @input and view, icon should have class "fa-tv"', () => {
        const element: HTMLElement = fixture.nativeElement;
        let baseResTest: BaseRes = {
            ...component.item,
            media_type: 'tv'
        };
        component.item = baseResTest;
        fixture.detectChanges();

        const testIcon = element.querySelector('div.bottom-area > i')!;
        expect(testIcon).toHaveClass('fa-tv');
    });

    it('test @input and view, icon should have class "fa-user"', () => {
        const element: HTMLElement = fixture.nativeElement;
        let baseResTest: BaseRes = {
            ...component.item,
            media_type: 'person'
        };
        component.item = baseResTest;
        fixture.detectChanges();

        const testIcon = element.querySelector('div.bottom-area > i')!;
        expect(testIcon).toHaveClass('fa-user');
    });

    it('test @input and view, overview should be visible', () => {
        const element: HTMLElement = fixture.nativeElement;

        const testOverview = element.querySelector('.overview-bg > span')!;
        expect(testOverview.innerHTML).toContain('This is the overview of the movie.');
    });

    it('test @input and view, date should be visible as YYYY', () => {
        const element: HTMLElement = fixture.nativeElement;

        const testDate = element.querySelector('.date-box > span')!;
        expect(testDate.innerHTML).toContain('2021');
    });

    it('posterLoaded is undefined', () => {
        expect(component.posterLoaded).toEqual(undefined);
    });

    it('backdropLoaded is undefined', () => {
        expect(component.backdropLoaded).toEqual(undefined);
    });

    it('loadCompleted should set posterLoaded for true', () => {
        let arg = {poster: true};
        component.loadCompleted(arg);
        expect(component.posterLoaded).toBeTruthy();
    });

    it('loadCompleted should set backdropLoaded for true', () => {
        let arg = {backdrop: true};
        component.loadCompleted(arg);
        expect(component.backdropLoaded).toBeTruthy();
    });
});
