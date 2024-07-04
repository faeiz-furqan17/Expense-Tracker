import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  expenses: [],
};
const expensesSlice = createSlice({
  name: "expenses",
  initialState: intialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push({
        ...action.payload,
        amount: Number(action.payload.amount),
      });
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    editExpense: (state, action) => {
      const { id, name, amount, date } = action.payload;
      const updatedExpense = state.expenses.find((expense) => expense.id == id);
      if (updatedExpense) {
        updatedExpense.name = name;
        updatedExpense.amount = Number(amount);
        updatedExpense.date = date;
      }

      // const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
      // if (index !== -1) {
      //   state.expenses[index] = {
      //     ...state.expenses[index],
      //     ...action.payload,
      //     amount: Number(action.payload.amount),
      //   }};
    },
  },
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
