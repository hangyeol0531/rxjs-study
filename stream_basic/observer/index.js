const rxjs = require('rxjs');
const {from} = rxjs;

const observable$ = from([1, 2, 3, 4, 5]);
const observer = {
  next: console.log,
  error: err => console.log('발행 중 오류', err),
  complete: () => console.log('발행물 완결'), // stream 모두 실행 후 complete
  // observable은 모두 발행 후 complete를 실행하여 메모리를 해제한다.
}
observable$.subscribe(observer);

observable$.subscribe(
  console.log,
  err => console.error('발행중 오류', err),
  _ => console.log('발행물 완결')
)