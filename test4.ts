enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Direction1 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

enum Decision {
  Yes = 1,
  No = 'No',
}

enum Decision1 {
  Yes = 1,
  No = calcEnum(),
}
function calcEnum() {
  return 2;
}

function runEnum(obj: { Up: string }) {}
runEnum(Direction1);

enum Test {
  A,
}

let test1 = Test.A;
let nameA = Test[test1]; // A

const enum ConstEnum {
  A,
  B,
}
let t = ConstEnum.A;

enum Dice {
  One = 1,
  Two,
  Tree,
}

function ruDice(dice: Dice) {
  switch (dice) {
    case Dice.One:
      return 'один';
    case Dice.Two:
      return 'два';
    case Dice.Tree:
      return 'три';
    default:
      const a: never = dice;
  }
}
