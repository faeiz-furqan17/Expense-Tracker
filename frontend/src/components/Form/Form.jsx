import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenses,
  updateExpenses,
  getSingleExpense,
} from "../../redux/expenses/expensesSlice";

import { Input, Button } from "antd";
function Form({ isModalOpen, id }) {
  const dispatch = useDispatch();

  const expenseList = useSelector((state) => state.expenses.singleExpense);

  const [expenseData, setExpenseData] = useState([expenseList]);

  useEffect(() => {
    dispatch(getSingleExpense(id));
  }, [id]);

  useEffect(() => {
    setExpenseData(expenseList);
  }, [expenseList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const handleFormSubmission = (e) => {
    if (expenseData.date > new Date().toISOString().split("T")[0]) {
      alert("Date can't be in future");
      return;
    }
    if (expenseData.amount < 1) {
      alert("Amount can't be less than 1");
      return;
    }
    if (expenseData.name == "") {
      alert("Name can't be empty");
      return;
    }
    if (expenseData.date == "") {
      alert("Date can't be empty");
      return;
    }
    if (expenseData.amount == "") {
      alert("Amount can't be empty");
      return;
    }

    e.preventDefault();
    isModalOpen();

    console.log(expenseData);
    if (id) {
      dispatch(updateExpenses(expenseData));
    } else {
      dispatch(addExpenses(expenseData));
    }

    setExpenseData({
      name: "",
      amount: null,
      date: "",
    });
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <Input
        placeholder="name"
        name="name"
        id="name"
        onChange={handleChange}
        value={expenseData.name}
        type="text"
      />
      <label htmlFor="amount">Amount</label>
      <Input
        placeholder="amount"
        name="amount"
        id="amount"
        onChange={handleChange}
        value={expenseData.amount}
        type="number"
      />
      <label htmlFor="date">Date</label>
      <Input
        placeholder="date"
        name="date"
        id="date"
        onChange={handleChange}
        value={expenseData.date}
        type="date"
      />
      <Button
        type="primary"
        onClick={handleFormSubmission}
        style={{ marginTop: "5px" }}
      >
        {id ? "Edit" : "Add"}
      </Button>
    </div>
  );
}

export default Form;
