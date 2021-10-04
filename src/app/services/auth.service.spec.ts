import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('after first open the page, should not be authenticated', () => {
        expect(service.isAuthenticated()).toBeFalsy();
    });

    it('after login, should be authenticated == true', () => {
        service.login();
        expect(service.isAuthenticated()).toBeTruthy();
    });

    it('after logout, should not be authenticated', () => {
        service.logout();
        expect(service.isAuthenticated()).toBeFalsy();
    });
});
