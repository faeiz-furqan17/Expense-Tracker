import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List as AntList, Button, Modal, Typography } from "antd";
import { removeExpense } from "../../redux/expenses/expensesSlice";
import Form from "../Form/Form";

const { Title, Text } = Typography;

function List() {
  const expenseList = useSelector((state) => state.expenses.expenses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editExpense, setEditExpense] = useState(null);

  const handleEditClick = (expense) => {
    setEditExpense(expense);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditExpense(null);
  };

  const totalExpenses = expenseList.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  const dispatch = useDispatch();

  return (
    <div>
      <AntList
        header={<Title level={2}>Expense List</Title>}
        bordered
        dataSource={expenseList}
        renderItem={(expense) => (
          <AntList.Item
            actions={[
              <Button type="link" onClick={() => handleEditClick(expense)}>
                Edit
              </Button>,
              <Button
                type="link"
                danger
                onClick={() => dispatch(removeExpense(expense.id))}
              >
                Delete
              </Button>,
            ]}
          >
            <Text>
              {expense.id} - {expense.name} - ${expense.amount} - {expense.date}
            </Text>
          </AntList.Item>
        )}
      />
      <Title level={3}>Total Expense: ${totalExpenses}</Title>

      <Modal
        title={editExpense ? "Edit Expense" : "Add Expense"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {isModalOpen && (
          <Form
            expense={editExpense}
            onShow={() => {
              setIsModalOpen(false);
              setEditExpense(null);
            }}
          />
        )}
      </Modal>
    </div>
  );
}

export default List;
