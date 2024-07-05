import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenses/expensesSlice";
export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
