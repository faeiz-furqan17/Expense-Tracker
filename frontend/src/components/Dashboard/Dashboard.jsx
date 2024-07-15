import React, { useEffect, useState } from "react";
import List from "../List/List";
import { useDispatch, useSelector } from "react-redux";
import { BarChart } from "@mui/x-charts";
import { showExpenses } from "../../redux/expenses/expensesSlice";

import style from "./Dashboard.module.scss";

import AnimatedNumber from "animated-number-react";

function Dashboard() {
  const dispatch = useDispatch();
  const expenseList = useSelector((state) => state.expenses.expenses);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    dispatch(showExpenses());
  }, []);
  useEffect(() => {
    setExpenses(expenseList);
  }, [expenseList]);

  const TotalExpense = () => {
    return expenseList.reduce(
      (acc, expense) => acc + Number(expense.amount),
      0
    );
  };
  console.log(expenses);
  return (
    <div className={style.dashboard}>
      <h1>
        Total Expenses: <AnimatedNumber value={TotalExpense()} />
      </h1>
    </div>
  );
}

export default Dashboard;
