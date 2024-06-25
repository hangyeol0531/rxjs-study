const rxjs = require("rxjs");
const {filter, map, of, from, pluck, range, toArray, scan, zip} = require("rxjs");

of(1, 2, 3, 4, 5).pipe(
  map((x) => x * x)
).subscribe(console.log);

const obs$ = from([
  {name: 'apple', price: 1200, info: {category: 'fruit'}},
  {name: 'carrot', price: 800, info: {category: 'vegetable'}},
  {name: 'pork', price: 5000, info: {category: 'meet'}},
  {name: 'milk', price: 2400, info: {category: 'drink'}}
]);

obs$.pipe(
  map(item => item.price)
).subscribe(console.log)

// 특정 항목만 출력
// ajax에서는 pluck('response', 'items', 0, 'html_url') 식으로 사용됨
obs$.pipe(
  pluck('info', 'category'),
).subscribe(console.log);

range(1, 50).pipe(
  filter(x => x % 3 === 0),
  toArray()
).subscribe(console.log)

// reduce는 결과만 보여주면, scan은 모든 계산 과정을 보여준다.
of(1, 2, 3, 4, 5).pipe(
  scan((acc, x) => {
    return acc + x
  }, 0)
).subscribe(x => console.log('scan: ' + x))


const obs1$ = from([1, 2, 3, 4, 5, 6, 7])
const obs2$ = from(['a', 'b', 'c', 'd', 'e'])
const obs3$ = from([true, false, 'F', [6, 7, 8], {name: 'zip'}])

// 2개 이상의 스트림을 1개의 배열로 엮어서 출력해준다.
// zip되는 스트림의 개수가 적은것 만큼 생성된다.
zip(obs1$, obs2$, obs3$).subscribe(console.log)
