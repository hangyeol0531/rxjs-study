const rxjs = require("rxjs");
const {max, reduce, tap} = require("rxjs");
const {first, last, elementAt, filter, distinct, from, count} = rxjs

const obs$ = from([
  9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2
]) // from -> arr

obs$.pipe(first()).subscribe(x => console.log('first: ' + x));
obs$.pipe(last()).subscribe(x => console.log('last: ' + x));

// n 번째 선택
obs$.pipe(elementAt(5)).subscribe(x => console.log('elementAt: ' + x));

// 중복 제거
// obs$.pipe(distinct()).subscribe(x => console.log('distinct: ' + x));

obs$.pipe(
  distinct(),
  count(),
).subscribe(x => console.log('distinct count: ' + x));

// obs$.pipe(
//   filter(x => x % 2 === 1)
// ).subscribe(x => console.log('filter: ' + x));

// 짝수들 중에서 가장 큰 수
obs$.pipe(
  filter(x => x % 2 === 0),
  max()
).subscribe(x => console.log(x));
// 5보다 큰 3번째 짝수
obs$.pipe(
  filter(x => x > 5),
  filter(x => x % 2 === 0),
  elementAt(2)
).subscribe(x => console.log(x));
// 한 번 이상 나온 홀수들의 갯수, 합
obs$.pipe(
  distinct(),
  filter(x => x % 2 === 1),
  reduce((acc, curr) => acc + curr, 0)
).subscribe(x => console.log(x));

// tap 중간에 로그 찍는 용 -> 최종 결과물에 영향 x
from([
  9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2
]).pipe(
  tap(x => console.log('first tab' + x)),
  filter(x => x % 2 === 0),
  tap(x => console.log('second tab' + x)),
  distinct(),
  tap(x => console.log('third tab' + x)),
).subscribe(x => console.log('result: ' + x))