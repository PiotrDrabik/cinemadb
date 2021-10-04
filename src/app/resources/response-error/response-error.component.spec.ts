import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from "@ngx-translate/core";
import { ResponseErrorComponent } from './response-error.component';

describe('ResponseErrorComponent', () => {
    let component: ResponseErrorComponent;
    let fixture: ComponentFixture<ResponseErrorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ResponseErrorComponent ],
            imports: [ TranslateModule.forRoot() ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResponseErrorComponent);
        component = fixture.componentInstance;
        component.errorMessageTranslationPath = 'Error occurred (test).';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test @input and view, error HTML should be visible', () => {
        const element: HTMLElement = fixture.nativeElement;

        const testTitle = element.querySelector('#error-message')!;
        expect(testTitle.textContent).toEqual('Error occurred (test).');
    });
});
