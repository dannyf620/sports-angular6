# pipe

```ng generate pipe pipes/truncat```

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    let limit = args[0] > 0 ? args[0] : 20;
    let trail = ''
    if (!args[1]) { trail = "..." }
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
```