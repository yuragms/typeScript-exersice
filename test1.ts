type Point = {
  x: number;
  y: number;
};

type stringOrNumber = string | number;

interface IPoint {
  x: number;
  y: number;
}

interface I3DPoint extends IPoint {
  z: number;
}

type D3Point = Point & {
  z: number;
};

function print(coord: Point) {}
function print2(coord: stringOrNumber) {}
function print3(coord: IPoint) {}
function print4(coord: I3DPoint) {}
function print5(coord: D3Point) {}

interface ITest {
  a: number;
}

interface ITest {
  b: number;
}

const g = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
};

const myCanvas = document.getElementById('canvas');
const myCanvas1 = document.getElementById('canvas') as HTMLCanvasElement;
