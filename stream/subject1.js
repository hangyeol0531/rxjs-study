const {Subject, interval} = require("rxjs");

// const subject = new Subject();
//
// // subject -> 해당 subject의 구독자는 모두 같은 값을 나태낸다.
// subject.subscribe(console.log);
//
// subject.next(1);
// subject.next(3);
// subject.next(5);

const subject = new Subject()
const obs$ = interval(1000)

obs$.subscribe(subject)
subject.subscribe(x => console.log('바로구독: ' + x))
setTimeout(_ => {
  subject.subscribe(x => console.log('3초 후 구독: ' + x))
}, 3000)
setTimeout(_ => {
  subject.subscribe(x => console.log('5초 후 구독: ' + x))
}, 5000)
setTimeout(_ => {
  subject.subscribe(x => console.log('10초 후 구독: ' + x))
}, 10000)