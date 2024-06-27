const {interval, take, tap, delay, timestamp, map, timeInterval, pluck, timeout, timeoutWith, of} = require("rxjs");
const {ajax} = require("rxjs/internal/ajax/ajax");
interval(1000).pipe(
  take(5),
  delay(1500)
).subscribe(x => console.log(x + ' 발행완료'))

// 현재 시간 출력
interval(1000).pipe(
  take(5),
  timestamp(),
  map(x => {
    x.timestamp = new Date(x.timestamp).toString();
    return x;
  })
).subscribe(x => console.log(x));

// 이전과 시간차 확인
interval(1000).pipe(
  timeInterval()
).subscribe(console.log);

// timeout 0.5초안에 응답안오면 err를 던짐
ajax('http://127.0.0.1:3000/people/name/random').pipe(
  pluck('response'),
  timeout(500)
).subscribe(console.log, console.error)

// timeoutWith 0.5초 동안 응답 없으면 다른 observable을 return한다.
ajax('http://127.0.0.1:3000/people/name/random').pipe(
  pluck('response'),
  timeoutWith(500, of({
    id: 0,
    first_name: 'Hong',
    last_name: 'Gildong',
    role: 'substitute'
  }))
).subscribe(console.log, console.error)