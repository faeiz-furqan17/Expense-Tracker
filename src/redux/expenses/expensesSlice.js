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
        (expense, index) => index !== action.payload
      );
    },
  },
});

export const { addExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
