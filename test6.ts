function logTime(num: number): number {
  console.log(new Date());
  return num;
}
function logTime1<T>(num: T): T {
  console.log(new Date());
  return num;
}

logTime1<number>(5);

function logTime2<T>(num: T): T {
  if (typeof num == 'string') {
    num.toLocaleUpperCase();
  }
  return num;
}

interface Myinterface {
  transform: <T, F>(a: T) => F;
}

class MyGenClass<T> {
  value: T;
}

const p = new MyGenClass<number>();
p.value;

interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp);
  return num;
}
