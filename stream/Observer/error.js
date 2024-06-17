const rxjs = require('rxjs');
const {Observable} = rxjs

const obs$ = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  (null)[0] // 이후에는 실행X
  subscriber.next(4)
})

obs$.subscribe(
  console.log,
  err => console.error('error', err),
  _ => console.log('complete')
)