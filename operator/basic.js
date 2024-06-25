const rxjs = require("rxjs");
const {of, count, max, min, reduce} = rxjs

const obs$ = of(4, 2, 6, 10, 8);

obs$.pipe(count()).subscribe(x => console.log('count: ' + x));
obs$.pipe(max()).subscribe(x => console.log('max: ' + x));
obs$.pipe(min()).subscribe(x => console.log('min: ' + x));

obs$.pipe(
  reduce((acc, x) => {
    return acc + x
  }, 0)
).subscribe(x => console.log('reduce ' + x));