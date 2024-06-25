const {filter, from, map, range} = require("rxjs");

const array = [1, 2, 3, 4, 5];

from(array).pipe(
  map(x => x * 2) //pure function => 원본 값은 건들지 않는다.
).subscribe(console.log);

console.log(array)

const observable$ = range(0, 10);
const observer = {
  next: x => console.log(x + ' 발행'),
  error: err => console.error('error', err),
  complete: () => console.log('발행물 완결'),
}

observable$
.pipe( // 하나 이상 들어갈 수 있음
  filter(x => x % 2 === 0),
  map(x => x * x),
  map(x => x + 10),
).subscribe(observer);
