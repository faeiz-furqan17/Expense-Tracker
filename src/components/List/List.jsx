import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../../redux/expenses/expensesSlice";
import { useState } from "react";
import Form from "../Form/Form";

function List() {
  const expenseList = useSelector((state) => state.expenses.expenses);
  const [showForm, setShowForm] = useState(false);
  const [editExpense, setEditExpense] = useState("");
  const handleEditClick = (expense) => {
    setEditExpense(expense);
    setShowForm(!showForm);
  };

  const totalExpenses = expenseList.reduce(
    (acc, expense) => (acc = acc + expense.amount),
    0
  );
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {expenseList.map((expense, index) => (
          <li key={index}>
            {expense.id}- {expense.name} - {expense.amount}-{expense.date}
            <button onClick={() => handleEditClick(expense)}>edit</button>
            <button onClick={() => dispatch(removeExpense(index))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h1>Total Expense</h1>
      <h1>{totalExpenses}</h1>

      {showForm ? (
        <Form expense={editExpense} onShow={() => setShowForm(false)}></Form>
      ) : (
        <></>
      )}
    </div>
  );
}

export default List;
