import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UpdateString' })

export class UpdateString implements PipeTransform {
    transform(value: string): string {
        return 'Buy';
    }
}
