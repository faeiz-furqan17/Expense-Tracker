import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/expenses/expensesSlice";

function Form({ showForm, onShow }) {
  const [expenseData, setExpenseData] = useState({
    name: "",
    amount: 0,
    date: "",
  });

  useEffect(() => {
    return () => expenseData;
  }, []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const handleFormSubmission = (e) => {
    onShow();
    e.preventDefault();
    console.log(expenseData);
    dispatch(addExpense(expenseData));

    setExpenseData({
      name: "",
      amount: 0,
      date: "",
    });
  };

  return (
    <div>
      <section className="add-expense-section">
        <form>
          <h1>Add Expense</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={expenseData.name}
            onChange={handleChange}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={expenseData.amount}
            onChange={handleChange}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={expenseData.date}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleFormSubmission}>
            add expense
          </button>
        </form>
      </section>
    </div>
  );
}

export default Form;
