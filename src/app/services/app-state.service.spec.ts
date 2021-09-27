import { TestBed } from '@angular/core/testing';
import { AppStateService } from './app-state.service';
import { BaseRes } from "../models/base-response";

describe('Tests AppStateService', () => {
    let service: AppStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = new AppStateService();
        let baseResHome: BaseRes = {
            name: 'extra movie',
            backdrop_path: 'test/image_path_1.jpg',
            id: 123,
            media_type: 'movie',
            overview: 'This is the overview of the movie.',
            release_date: '2021-11-20'
        };
        let baseResSearch: BaseRes = {
            title: 'extra tv series',
            original_language: 'en',
            backdrop_path: 'test/image_path_1.jpg',
            id: 333,
            media_type: 'tv',
            overview: 'This is the overview of the tv series.',
            release_date: '2020-09-11'
        };
        service.home = [ baseResHome, baseResHome ];
        service.search = [ baseResSearch ];
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be defined and should have variable "home" type Array', () => {
        expect(service.home).toBeDefined();
        expect(Array.isArray(service.home)).toBeTruthy();
    });

    it('should have first element object with field "name"', () => {
        expect(service.home[0]).toBeDefined();
        expect(service.home[0].name).toEqual('extra movie');
    });

    it('should be defined and should have variable "search" type Array', () => {
        expect(service.search).toBeDefined();
        expect(Array.isArray(service.search)).toBeTruthy();
    });

    it('should have first element object with field "media_type"', () => {
        expect(service.search[0]).toBeDefined();
        expect(service.search[0].media_type).toEqual('tv');
    });
});
