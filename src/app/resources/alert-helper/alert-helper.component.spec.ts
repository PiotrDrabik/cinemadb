import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertHelperComponent } from './alert-helper.component';

describe('AlertHelperComponent', () => {
    let component: AlertHelperComponent;
    let fixture: ComponentFixture<AlertHelperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AlertHelperComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertHelperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('after call fn addAlert(), listAlerts should have the content', () => {
        let argument = {
            title: 'test',
            message: 'test message'
        }
        component.addAlert(argument);
        expect(component.alertService.listAlerts).toEqual([{title: 'test', message: 'test message'}]);
    });

    it('html shouldnt be attached to the DOM', () => {
        expect(fixture.debugElement.query(By.css('.toast-body'))).toBeNull();
    });
});
