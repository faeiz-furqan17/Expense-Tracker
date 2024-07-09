import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { expenses } from "../../Data/expenseData/expenseData";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";

const intialState = {
  expenses: [],
  // fireBaseExpenses: [],
  loading: false,
  error: null,
};
expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

//i am writing a asyncThunk

export const showExpenses = createAsyncThunk(
  "showExpenses",
  async (rejectWithValue) => {
    const response = await fetch("http://localhost:3000/api/expenses");
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: intialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push({
        ...action.payload,
        amount: Number(action.payload.amount),
      });
      state.expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
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
      state.expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(showExpenses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showExpenses.fulfilled, (state, action) => {
      state.expenses = [...action.payload];
    }),
      builder.addCase(showExpenses.rejected, (state, action) => {
        state.error = action.error.message;
        console.log("Error fetching expenses: ", action.error.message);
      });
  },
});

export const { addExpense, removeExpense, editExpense, extraReducers } =
  expensesSlice.actions;

export default expensesSlice.reducer;
