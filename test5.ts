const y: [number, string, number] = [0, 'a', 1];

y.push(1);
y.map((s) => {
  switch (typeof s) {
    case 'string':
      break;
  }
});

// деструктуризация кортежей
const [u, i, o] = y;

y[1];
