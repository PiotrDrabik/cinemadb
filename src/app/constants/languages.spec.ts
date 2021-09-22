import { Languages } from './languages';

describe('Languages constants', () => {
    let languages: Languages;

    beforeEach(async () => {
        languages = new Languages();
    });

    it('class should be created', () => {
        expect(languages).toBeTruthy();
    });

    it('should return string', () => {
        expect(languages.EN).toBe('en-EN');
    });

    it('should return string', () => {
        expect(languages.DE).toBe('de-DE');
    });

    it('should return string', () => {
        expect(languages.FR).toBe('fr-FR');
    });

    it('should return string', () => {
        expect(languages.PL).toBe('pl-PL');
    });
});
