import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringCut'
})
export class StringCutPipe implements PipeTransform {

    transform(value: string, size: number = 200): string {
        // cut text
        let result = value.substring(0, size);
        // add dots if text was cut
        result = result + (value && (value.length > result.length ? '...' : ''));
        return result;
    }
}
