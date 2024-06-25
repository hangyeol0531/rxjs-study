const {filter, interval, tap, map} = require("rxjs");
const observable$ = interval(1000)

observable$.pipe(
  tap(console.log), // 중간 pipe과정에서 미리 시킬때 사용
  filter(x => x % 2 === 0),
  map(x => x * x)
).subscribe(x => console.log(x, '발행'))