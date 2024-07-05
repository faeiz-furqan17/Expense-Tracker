import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../../redux/expenses/expensesSlice";
import Form from "../Form/Form";
import { Modal, Table, Button } from "antd";
import style from "./List.module.scss";
import Chart from "../Chart/Chart";
import AnimatedNumber from "animated-number-react";

function List() {
  const expenseList = useSelector((state) => state.expenses.expenses);

  const [editExpense, setEditExpense] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleEditClick = (expense) => {
    setEditExpense(expense);
    showModal();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        { text: "Joe", value: "Joe" },
        {
          text: "Category 1",
          value: "Category 1",
          children: [
            { text: "Yellow", value: "Yellow" },
            { text: "Pink", value: "Pink" },
          ],
        },
        {
          text: "Category 2",
          value: "Category 2",
          children: [
            { text: "Green", value: "Green" },
            { text: "Black", value: "Black" },
          ],
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => a.amount - b.amount,
      render: (amount) => amount.toFixed(2),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Button
            style={{ margin: "5px" }}
            onClick={() => handleEditClick(record)}
          >
            Edit
          </Button>
          <Button danger onClick={() => dispatch(removeExpense(record.id))}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const data = expenseList.map((expense) => ({
    key: expense.id,
    ...expense,
  }));

  const totalExpenses = expenseList.reduce(
    (acc, expense) => acc + Number(expense.amount),
    0
  );
  const maxExpense = Math.max(...expenseList.map((expense) => expense.amount));

  return (
    <div className={style.mainContainer}>
      <div
        className={style.list}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          overflowY: "scroll",
          height: "50vh",
          width: "80%",
          margin: "0 auto",
          marginTop: "100px",

          boxSizing: "border-box",
        }}
      >
        <Table
          style={{ width: "100%" }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
      <Chart className="Chart" expensedata={expenseList} />
      <h3 style={{ textAlign: "center" }}>Total Expense</h3>
      <h1>
        <AnimatedNumber value={totalExpenses.toFixed(2)} duration={3000}>
          {" "}
        </AnimatedNumber>
      </h1>
      <h3 style={{ textAlign: "center" }}>Max Expense</h3>
      <h1>{maxExpense}</h1>
      <Modal
        title="Edit Expense"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form expense={editExpense} isModalOpen={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default List;
