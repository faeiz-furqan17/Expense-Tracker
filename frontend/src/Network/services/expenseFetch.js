import axios from "axios";
import { apiCalls } from "./servicelayer";

const BASE_URL = "http://localhost:3000/api";

// Fetch the list of all expenses
export const getExpensesList = async () => {
  const response = await apiCalls({
    method: "GET",
    url: BASE_URL + "/expenses",
  });
  return new Promise(async (resolve, reject) => {
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject("Something went wrong");
    }
  });
};

// Delete a specific expense by ID
export const deleteExpense = async (id) => {
  const response = await apiCalls({
    method: "DELETE",
    url: BASE_URL + `/expenses/delete/${id}`,
  });
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      resolve(id);
    } else {
      reject("Something went wrong");
    }
  });
};

// Add a new expense
export const addExpense = async (expenseData) => {
  debugger;
  const response = await apiCalls({
    method: "POST",
    url: BASE_URL + "/expenses/add",
    data: expenseData,
  });
  return new Promise((resolve, reject) => {
    debugger;
    if (response.status === 200) {
      resolve(response.data.result);
    } else {
      debugger;
      reject("Something went wrong");
    }
  });
};

// Update an existing expense by ID
export const updateExpense = async (expenseData) => {
  debugger;
  const response = await apiCalls({
    method: "PUT",
    url: BASE_URL + `/expenses/update/${expenseData.id}`,
    data: expenseData,
  });
  return new Promise((resolve, reject) => {
    debugger;
    if (response.status === 200) {
      resolve(response.data.result);
    } else {
      reject("Something went wrong");
    }
  });
};
// get a single expense

export const getExpenseById = async (id) => {
  debugger;
  const response = await apiCalls({
    method: "GET",
    url: BASE_URL + `/expense/${id}`,
  });
  return new Promise((resolve, reject) => {
    debugger;
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject("Something went wrong");
    }
  });
};
