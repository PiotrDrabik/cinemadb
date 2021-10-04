import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateCustom'
})
export class DateCustomPipe implements PipeTransform {

    transform(value: string | undefined, ...args: unknown[]): string | undefined {
        if (typeof value !== "string") {
            return value
        }
        let dateElem = Date.parse(value);
        let dateNow = Date.now();
        let result = (dateNow < dateElem) ? value : String(new Date(value).getFullYear());

        return result;
    }
}
