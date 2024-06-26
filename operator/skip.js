const {range, skip, skipLast, interval, skipWhile} = require("rxjs");

// 앞에 5개 skip
range(1, 20).pipe(
  skip(5)
).subscribe(console.log);

// 맨뒤 5개 skip
range(1, 20).pipe(
  skipLast(5)
).subscribe(console.log);


// 6초가 지나면 뒤에 5개가 없어지지 1부터 출력
interval(1000).pipe(
  skipLast(5)
).subscribe(
  console.log,
  err => console.error(err),
  _ => console.log('complete')
);

// ~ 하는 동안 건너 띄기
range(1, 20).pipe(
  skipWhile(x => x <= 10)
).subscribe(console.log)