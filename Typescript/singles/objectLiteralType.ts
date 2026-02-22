// Object literal types allow you to describe the shape of an object:
type Saiyan = {
  name: string;
  power: number;
};

function logSaiyan(saiyan: Saiyan) {
  console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
  // ...
}