import { faker } from "@faker-js/faker";

export function createRandomExpense() {
  return {
    id: faker.datatype.uuid().slice(0, 8),
    name: faker.commerce.productName(), // or any other relevant faker method for names
    amount: Number(faker.finance.amount(1000, 10000)),
    date: faker.date.past().toISOString().split("T")[0],
  };
}

export const expenses = faker.helpers.multiple(createRandomExpense, {
  count: 50,
});
