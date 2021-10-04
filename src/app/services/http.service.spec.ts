import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { QueryUrlModel } from "../models/query-url-model";
import { Languages } from "../constants/languages";
import { AlertHelperComponent } from "../resources/alert-helper/alert-helper.component";
import { AppConfigService } from "./app-config.service";

describe('HttpService', () => {
    let service: HttpService;
    let languages = new Languages();

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService, AlertHelperComponent, AppConfigService]
        });
        service = TestBed.inject(HttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('test generateUrl(), should return string with provided values', () => {
        let exampleQuery: QueryUrlModel = {
            append: undefined,
            language: languages.EN,
            mediaType: "multi",
            page: 0,
            query: "avengers",
            baseAction: "search"
        }
        let result = service.generateUrl(exampleQuery);
        expect(typeof result).toEqual('string');
        expect(result).toContain('https://');
        expect(result).toContain(exampleQuery.language);
        expect(result).toContain(exampleQuery.mediaType);
        expect(result).toContain(exampleQuery.query!);
        expect(result).toContain(exampleQuery.baseAction);
        expect(result).toContain(String(exampleQuery.page));
    });

    it('test generateUrl(), should return string that contains all provided values', () => {
        let exampleQuery: QueryUrlModel = {
            append: 'append=video',
            language: languages.DE,
            mediaType: "tv/day",
            page: 2,
            query: "bond",
            baseAction: "trending"
        }
        let result = service.generateUrl(exampleQuery);
        expect(typeof result).toEqual('string');
        expect(result).toContain('https://');
        expect(result).toContain(String(exampleQuery.append));
        expect(result).toContain(exampleQuery.language);
        expect(result).toContain(exampleQuery.mediaType);
        expect(result).toContain(exampleQuery.query!);
        expect(result).toContain(exampleQuery.baseAction);
        expect(result).toContain(String(exampleQuery.page));
    });
});
