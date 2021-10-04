import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from "@angular/router/testing";
import { AppStateService } from "./app-state.service";
import { AppConfigService } from "./app-config.service";
import { AlertHelperComponent } from "../resources/alert-helper/alert-helper.component";

describe('AuthGuardService', () => {
    let service: AuthGuardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            providers: [ AppStateService, AppConfigService, AlertHelperComponent ]
        });
        service = TestBed.inject(AuthGuardService);
    });

    it('should return false for not logged in', async () => {
        expect(service).toBeTruthy();
        // @ts-ignore
        expect(await service.canActivate({}, {})).toBeFalse();
    });
});
