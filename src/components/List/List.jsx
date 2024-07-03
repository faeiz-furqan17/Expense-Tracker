import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../../redux/expenses/expensesSlice";

function List() {
  const expenseList = useSelector((state) => state.expenses.expenses);

  const totalExpenses = expenseList.reduce(
    (acc, expense) => (acc = acc + expense.amount),
    0
  );
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {expenseList.map(
          (expense, index) => (
            console.log(typeof expense.amount),
            (
              <li key={index}>
                {expense.name} - {expense.amount}-{expense.date}
                <button onClick={() => dispatch(removeExpense(index))}>
                  Delete
                </button>
              </li>
            )
          )
        )}
      </ul>
      <h1>Total Expense</h1>
      <h1>{totalExpenses}</h1>
    </div>
  );
}

export default List;
