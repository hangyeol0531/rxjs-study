const rxjs = require('rxjs');
const {Observable} = rxjs

const obs$ = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.complete() // 이후에는 실행X, 제때 complete해야 메모리 낭비가안된다.
  subscriber.next(4)
})

obs$.subscribe(
  console.log,
  err => console.error('error', err),
  _ => console.log('complete')
)