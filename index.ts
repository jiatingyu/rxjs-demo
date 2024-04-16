import './style.css';

import { rx, of, map, interval } from 'rxjs';
import { mergeAll, mergeMap } from 'rxjs';

rx(
  of('World'),
  map((name) => `Hello, ${name}!`)
).subscribe(console.log);

// of('a', 'b', 'c')
//   .pipe(
//     map((x) => interval(5000).pipe(map((i) => x + i))),
//     mergeAll()
//   )
//   .subscribe((x) => console.log(x));
// Open the console in the bottom right to see results.

of('a', 'b', 'c')
  .pipe(mergeMap((x) => interval(5000).pipe(map((i) => x + i))))
  // .pipe(mergeMap(x => interval(5000)))
  .subscribe((x) => console.log(x));
