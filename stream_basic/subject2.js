const {BehaviorSubject, ReplaySubject, AsyncSubject} = require("rxjs");
const behaviorSubject = new BehaviorSubject(0) // 초기값이 있음

console.log("BehaviorSubject");
behaviorSubject.subscribe((x) => console.log('A: ' + x))

behaviorSubject.next(1)
behaviorSubject.next(2)
behaviorSubject.next(3)

// 마지막 값을 저장 후 구독자에게 발행
behaviorSubject.subscribe((x) => console.log('B: ' + x))

behaviorSubject.next(4)
behaviorSubject.next(5)

console.log("ReplaySubject");
const replaySubject = new ReplaySubject(3) // 마지막 N개 값 저장

replaySubject.subscribe((x) => console.log('A: ' + x))

replaySubject.next(1)
replaySubject.next(2)
replaySubject.next(3)
replaySubject.next(4)
replaySubject.next(5)

replaySubject.subscribe((x) => console.log('B: ' + x))

replaySubject.next(6)
replaySubject.next(7)

console.log("AsyncSubject");
const asyncSubject = new AsyncSubject()

asyncSubject.subscribe((x) => console.log('A: ' + x))

asyncSubject.next(1)
asyncSubject.next(2)
asyncSubject.next(3)

asyncSubject.subscribe((x) => console.log('B: ' + x))

asyncSubject.next(4)
asyncSubject.next(5)

asyncSubject.subscribe((x) => console.log('C: ' + x))

asyncSubject.next(6)
asyncSubject.next(7)
asyncSubject.complete() // complete 시 해당 구독자에게 마지막 값들만 보내준다.