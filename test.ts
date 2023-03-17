let a: number = 4;
let b = 'dfdfd';
let c = true;

let d: string[] = ['sdf', 'dsds'];

let e: any = 3;

e = 'fdfdf';

function test(a: string): number | string {
  return '';
}
const test2 = (a: number): number => {
  return a * 2;
};
d = d.map((x: string) => x.toLowerCase());

function countCoord(coord: { lat: number; long?: number }) {}

function printIt(id: number | string) {
  if (typeof id === 'number') {
    console.log(id.toString());
  } else if (typeof id === 'string') {
    id.toUpperCase();
  }
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {
      a.
  }
}
// если функция ничего не возвращает нужно написать void

const test3 = (a: number): void => {
  return;
};

const x: undefined = undefined;
const z: null = null;
