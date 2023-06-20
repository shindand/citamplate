import { mag, magicSort } from '../basic';

test('mag', () => {
  const obj2 = { name: 'Маг', health: 90 };
  const result = mag(obj2);

  expect(result).toBe('healthy');
});

test('magicsort', () => {
  const magic2 = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  const result = magicSort([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual(magic2);
});
