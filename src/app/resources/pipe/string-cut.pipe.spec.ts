import { StringCutPipe } from './string-cut.pipe';

describe('StringCutPipe', () => {
    it('create an instance', () => {
        const pipe = new StringCutPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return string cut with dots', () => {
        const pipe = new StringCutPipe();
        let testValue = 'Lorem ipsum dolor sit amet.';
        expect(pipe.transform(testValue, 10)).toEqual('Lorem ipsu...');
    });

    it('should return string without dots', () => {
        const pipe = new StringCutPipe();
        let testValue = 'Lorem ipsum dolor sit amet.';
        expect(pipe.transform(testValue, 100)).toEqual(testValue);
    });
});
