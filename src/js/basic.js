const obj2 = { name: 'Маг', health: 90 };

export function mag(obj) {
  let magReturn = '';
  if (obj.health < 15) {
    magReturn = 'critical';
  }
  if (obj.health > 15 && obj.health < 50) {
    magReturn = 'wounded';
  }
  if (obj.health > 50) {
    magReturn = 'healthy';
  }
  return magReturn;
}
mag(obj2);

const magic2 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
export function magicSort(magic) {
  return magic.sort((a, b) => a.health - b.health);
}
magicSort(magic2);