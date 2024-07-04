import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addExpense, editExpense } from "../../redux/expenses/expensesSlice";
import { Input, Button } from "antd";
function Form({ showForm, onShow, expense }) {
  const unique_id = uuid();
  const [expenseData, setExpenseData] = useState(
    expense
      ? {
          id: expense.id,
          name: expense.name,
          amount: expense.amount,
          date: expense.date,
        }
      : { id: unique_id.slice(0, 8), name: "", amount: null, date: "" }
  );

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

    onShow();
    e.preventDefault();
    console.log(expenseData);
    if (expense) {
      dispatch(editExpense(expenseData));
    } else dispatch(addExpense(expenseData));

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
        {expense ? "Edit" : "Add"}
      </Button>
    </div>
  );
}

export default Form;

//   return (
//     <div>
//       <section className="add-expense-section">
//         <form>
//           <h1>Add Expense</h1>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={expenseData.name}
//             onChange={handleChange}
//           />
//           <label htmlFor="amount">Amount</label>
//           <input
//             min={1}
//             type="number"
//             name="amount"
//             id="amount"
//             value={expenseData.amount}
//             onChange={handleChange}
//           />
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={expenseData.date}
//             onChange={handleChange}
//             min={new Date().getMonth()}
//           />
//           <button type="button" onClick={handleFormSubmission}>
//             add expense
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Form;
