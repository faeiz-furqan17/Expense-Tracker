import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addExpense,
  deleteExpense,
  getExpenseById,
  getExpensesList,
  updateExpense,
} from "../../Network/services/expenseFetch";

const intialState = {
  expenses: [],
  singleExpense: [
    {
      name: "",
      amount: {},
      date: "",
    },
  ],
  loading: false,
  error: null,
};
// expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

//i am writing a asyncThunk

export const showExpenses = createAsyncThunk("showExpenses", getExpensesList);

export const deleteExpenses = createAsyncThunk("deleteExpenses", deleteExpense);

export const addExpenses = createAsyncThunk("addExpenses", addExpense);

export const updateExpenses = createAsyncThunk("updateExpenses", updateExpense);

export const getSingleExpense = createAsyncThunk(
  "getSingleExpense",
  getExpenseById
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(showExpenses.pending, (state) => {
      debugger;
      state.loading = true;
    });
    builder.addCase(showExpenses.fulfilled, (state, action) => {
      debugger;
      state.expenses = [...action.payload];
    });
    builder.addCase(showExpenses.rejected, (state, action) => {
      debugger;
      state.error = action.error.message;
      console.log("Error fetching expenses: ", action.error.message);
    });
    builder.addCase(deleteExpenses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteExpenses.fulfilled, (state, action) => {
      state.loading = false;

      const expenseid = action.meta.arg;

      if (expenseid) {
        state.expenses = state.expenses.filter(
          (element) => element.id !== expenseid
        );
      }

      console.log("delete action", action.payload);
    });
    builder.addCase(deleteExpenses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("Error deleting expense: ", action.error.message);
    });
    builder.addCase(addExpenses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addExpenses.fulfilled, (state, action) => {
      state.loading = false;
      state.expenses.push({
        id: action.payload.id,
        ...action.payload.result,
      });

      state.expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    });
    builder.addCase(addExpenses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("Error adding expense: ", action.error.message);
    });
    builder.addCase(updateExpenses.pending, (state) => {
      debugger;
      state.loading = true;
    });
    builder.addCase(updateExpenses.fulfilled, (state, action) => {
      debugger;
      state.loading = false;
      const expenseid = action.meta.arg.id;
      const updatedExpense = action.meta.arg;

      if (expenseid) {
        const updatedIndex = state.expenses.findIndex(
          (element) => element.id === expenseid
        );
        if (updatedIndex !== -1) {
          state.expenses[updatedIndex] = updatedExpense;
        }
      }

      state.expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    });
    builder.addCase(updateExpenses.rejected, (state, action) => {
      debugger;
      state.loading = false;
      state.error = action.error.message;
      console.log("Error updating expense: ", action.error.message);
    });
    builder.addCase(getSingleExpense.pending, (state) => {
      debugger;
      state.loading = true;
    });
    builder.addCase(getSingleExpense.fulfilled, (state, action) => {
      debugger;
      state.loading = false;
      state.singleExpense = action.payload;
    });
    builder.addCase(getSingleExpense.rejected, (state, action) => {
      debugger;
      state.loading = false;
      state.error = action.error.message;
      console.log("Error fetching single expense: ", action.error.message);
    });
  },
});

export const { extraReducers } = expensesSlice.actions;

export default expensesSlice.reducer;
