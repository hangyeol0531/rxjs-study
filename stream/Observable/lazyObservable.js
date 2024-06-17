const rxjs = require("rxjs");
const {of, interval, fromEvent} = rxjs

const obs1$ = of('a', 'b', 'c')
const obs2$ = interval(1000)

// 누군가 값을 구독해여 Observable이 샐행됨
setTimeout(_ => {
  console.log('of 구독 시작')
  obs1$.subscribe(item => console.log(item))
}, 5000)
setTimeout(_ => {
  console.log('interval 구독 시작')
  obs2$.subscribe(item => console.log(item))
}, 10000)
setTimeout(_ => {
  console.log('interval 구독 시작 2')
  obs2$.subscribe(item => console.log(item))
}, 20000)