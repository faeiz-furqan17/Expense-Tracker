import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenses,
  updateExpenses,
  getSingleExpense,
} from "../../redux/expenses/expensesSlice";
import { Input, TextField, Button } from "@mui/material";
import styles from "./Form.module.scss";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
function Form({ isModalOpen, id }) {
  const dispatch = useDispatch();

  const expenseList = useSelector((state) => state.expenses.singleExpense);
  // const singleExpenseList = useSelector((state) => state.expenses.singleExpense);

  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    debugger;
    id ? dispatch(getSingleExpense(id)) : {};
  }, [isModalOpen]);

  useEffect(() => {
    debugger;
    id
      ? setExpenseData({
          id: id,
          name: expenseList.name,
          amount: Number(expenseList.amount),
          date: expenseList.date,
        })
      : {};
  }, [expenseList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: name === "amount" ? Number(value) : value,
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
    if (expenseData.date == undefined) {
      alert("Date can't be empty");
      return;
    }
    if (expenseData.amount == undefined) {
      alert("Amount can't be empty");
      return;
    }

    e.preventDefault();
    isModalOpen();

    console.log(expenseData);
    if (id) {
      debugger;
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
    <div className={styles.formContainer}>
      {/* <label htmlFor="name">Name</label>
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
      </Button> */}
      <TextField
        focused
        id="items"
        label="items"
        name="name"
        value={expenseData.name}
        onChange={handleChange}
        variant="standard"
        color="secondary"
        placeholder="Enter the item"
        fullWidth
      />
      <TextField
        focused
        id="amount"
        label="items"
        name="amount"
        value={expenseData.amount}
        onChange={handleChange}
        variant="standard"
        color="secondary"
        type="currency"
        fullWidth
        placeholder="Enter the amount"
      />
      <TextField
        focused
        type="date"
        id="items"
        label="items"
        name="date"
        value={expenseData.date}
        onChange={handleChange}
        variant="standard"
        color="secondary"
        fullWidth
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <Button
          varient="standard"
          onClick={() => {
            isModalOpen();
          }}
        >
          close
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setExpenseData({
              name: "",
              amount: {},
              date: "",
            });
          }}
        >
          reset
        </Button>
        <Button variant="contained" onClick={handleFormSubmission}>
          {id ? "Edit" : "Add"}
        </Button>
      </div>
    </div>
  );
}

export default Form;
