import { DateCustomPipe } from './date-custom.pipe';

describe('DateCustomPipe', () => {
    it('create an instance', () => {
        const pipe = new DateCustomPipe();
        expect(pipe).toBeTruthy();
    });

    it('return full date for date in future', () => {
        const pipe = new DateCustomPipe();
        const dateInFuture = '2150-01-01';
        let result = pipe.transform(dateInFuture);
        expect(result).toEqual(dateInFuture);
    });

    it('create an instance', () => {
        const pipe = new DateCustomPipe();
        const dateInPast = '1999-01-01';
        let result = pipe.transform(dateInPast);
        expect(result).toEqual('1999');
    });
});
