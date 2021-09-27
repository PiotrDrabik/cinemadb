import { TestBed } from '@angular/core/testing';
import { Languages } from "../constants/languages";
import { AppConfigService } from './app-config.service';

describe('AppConfigService', () => {
    let service: AppConfigService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppConfigService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('refreshCalled$ should be defined', () => {
        expect(service.refreshCalled$).toBeDefined();
    });

    it('get apiKey should return string', () => {
        expect(typeof service.apiKey).toEqual('string');
        expect(service.apiKey).not.toEqual('');
    });

    it('contentLanguage should be changed', () => {
        let language = new Languages();
        service.contentLanguage = language.DE;
        expect(language.DE).toEqual('de-DE');
        expect(service.contentLanguage).toEqual(language.DE);
    });

    it('contentLanguage should have default value', () => {
        let language = new Languages();
        expect(service.contentLanguage).toEqual(language.EN);
    });

    it('activeFlag should be changed', () => {
        service.activeFlag = 'DE';
        expect(service.activeFlag).toEqual('DE');
    });

    it('activeFlag should have default value', () => {
        expect(service.activeFlag).toEqual('EN');
    });

    it('host should be a string and not be empty', () => {
        expect(typeof service.host).toEqual('string');
        expect(service.host).not.toEqual('');
    });

    it('hostImage should be a string and not be empty', () => {
        expect(typeof service.hostImage).toEqual('string');
        expect(service.hostImage).not.toEqual('');
    });

    it('QUALITY_IMAGE should have at least 2 types', () => {
        expect(typeof service.QUALITY_IMAGE).toEqual('object');
        expect(Object.keys(service.QUALITY_IMAGE)).toContain('ORIGINAL');
        expect(Object.keys(service.QUALITY_IMAGE)).toContain('STANDARD');
    });
});
