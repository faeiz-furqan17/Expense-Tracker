import axios from "axios";
import { apiCalls } from "./servicelayer";

const BASE_URL = "http://localhost:3000/api";

// Fetch the list of all expenses
// export const getExpensesList = async () => {
//   const response = await apiCalls({
//     method: "GET",
//     url: BASE_URL + "/expenses",
//   });
//   return new Promise(async (resolve, reject) => {
//     if (response.status === 200) {
//       resolve(response.data);
//     } else {
//       reject("Something went wrong");
//     }
//   });
// };
debugger;

export const getExpensesList = async (signal) => {
  debugger;
  try {
    const response = await axios({
      method: "GET",
      url: BASE_URL + "/expenses",
      signal: signal,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled due to debounce");
    } else {
      throw error;
    }
  }
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
  const response = await apiCalls({
    method: "POST",
    url: BASE_URL + "/expenses/add",
    data: expenseData,
  });
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      resolve(response.data.result);
    } else {
      reject("Something went wrong");
    }
  });
};
debugger;
// Update an existing expense by ID
export const updateExpense = async (expenseData) => {
  debugger;
  const response = await apiCalls({
    method: "PUT",
    url: BASE_URL + `/expenses/update/${expenseData.id}`,
    data: expenseData,
  });
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      resolve(response.data.result);
    } else {
      reject("Something went wrong");
    }
  });
};
// get a single expense
debugger;

export const getExpenseById = async (id) => {
  debugger;
  const response = await apiCalls({
    method: "GET",
    url: BASE_URL + `/expense/${id}`,
  });
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject("Something went wrong");
    }
  });
};
