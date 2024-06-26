const {interval, range, take, takeLast, takeUntil, takeWhile} = require("rxjs");

// 앞에 5개 가져오기
range(1, 20).pipe(
  take(5)
).subscribe(console.log);

// take로 지정을 하면 complete가 실행됨
interval(1000).pipe(
  take(5)
).subscribe(
  console.log,
  err => console.log(err),
  _ => console.log('complete')
);

// 뒤에서 5개 가져오기
range(1, 20).pipe(
  takeLast(5)
).subscribe(console.log);

interval(1000).pipe(
  take(10),
  takeLast(5),
).subscribe(
  console.log,
  err => console.log(err),
  _ => console.log('complete')
);

// take while 만족하지 않으면 complete
range(1, 20).pipe(
  takeWhile(x => x <= 10)
).subscribe(
  console.log,
  err => console.log(err),
  _ => console.log('complete')
);

// interval 3000이 실행되기 전까지만 동작 그 후는 complete
interval(1000).pipe(
  takeUntil(interval(3000))
).subscribe(
  console.log,
  err => console.log(err),
  _ => console.log('complete')
)
