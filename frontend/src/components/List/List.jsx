import AnimatedNumber from "animated-number-react";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpenses,
  showExpenses,
} from "../../redux/expenses/expensesSlice";
import Chart from "../Chart/Chart";
import Form from "../Form/Form";
import style from "./List.module.scss";
import { Button, Modal, Box, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
function List() {
  const expenseList = useSelector((state) => state.expenses.expenses);

  const [editExpense, setEditExpense] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const count = useRef(10);
  const abortControllerRef = useRef(null);

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
  useEffect(
    (state) => {
      dispatch(showExpenses());
    },
    [showExpenses]
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      sortable: true,
      width: 200,
    },
    {
      field: "name",
      headerName: "Items",
      sortable: true,
      width: 150,
    },
    {
      field: "amount",
      headerName: "Amount",
      sortable: true,
      width: 100,
    },
    {
      field: "date",
      headerName: "Date",
      sortable: true,
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <div>
          <Button
            variant="outlined"
            style={{ marginRight: 8 }}
            onClick={() => handleEditClick(params.row.id)}
            color="secondary"
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(deleteExpenses(params.row.id))}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  const rows = [...expenseList];

  // // setTimeout(() => {
  // //   if (count.current > 0) {
  // //     if (abortControllerRef?.current) {
  // //       abortControllerRef.current.abort();
  // //     }
  // //     abortControllerRef.current = new AbortController();
  // //     const signal = abortControllerRef.current?.signal;
  // //     ;
  // //     count.current = count.current - 1;
  // //     dispatch(showExpenses(signal));
  // //   }
  // // }, 0);

  // // const columns = [
  // //   {
  // //     title: "ID",
  // //     dataIndex: "id",
  // //     key: "id",
  // //     width: "20%",
  // //   },
  // //   {
  // //     title: "Name",
  // //     dataIndex: "name",
  // //     key: "name",
  // //     filters: [
  // //       { text: "Joe", value: "Joe" },
  // //       {
  // //         text: "Category 1",
  // //         value: "Category 1",
  // //         children: [
  // //           { text: "Yellow", value: "Yellow" },
  // //           { text: "Pink", value: "Pink" },
  // //         ],
  // //       },
  // //       {
  // //         text: "Category 2",
  // //         value: "Category 2",
  // //         children: [
  // //           { text: "Green", value: "Green" },
  // //           { text: "Black", value: "Black" },
  // //         ],
  // //       },
  // //     ],
  // //     filterMode: "tree",
  // //     filterSearch: true,
  // //     onFilter: (value, record) => record.name.includes(value),
  // //     width: "30%",
  // //   },
  // //   {
  // //     title: "Amount",
  // //     dataIndex: "amount",
  // //     key: "amount",
  // //     sorter: (a, b) => a.amount - b.amount,
  // //     render: (amount) => amount,
  // //   },
  // //   {
  // //     title: "Date",
  // //     dataIndex: "date",
  // //     key: "date",
  // //     width: "20%",
  // //   },
  // //   {
  // //     title: "Actions",
  // //     key: "actions",
  // //     render: (_, record) => (
  // //       <span>
  // //         <Button
  // //           style={{ margin: "5px" }}
  // //           onClick={() => {
  // //             handleEditClick(record.id);
  // //           }}
  // //         >
  // //           Edit
  // //         </Button>
  // //         <Button
  // //           danger
  // //           onClick={() => {
  // //             dispatch(deleteExpenses(record.id));
  // //           }}
  // //         >
  // //           Delete
  // //         </Button>
  // //       </span>
  // //     ),
  // //   },
  // // ];

  // // const data = expenseList.map((expense) => ({
  // //   key: expense.id,
  // //   ...expense,
  // // }));

  // // const maxExpense = Math.max(...expenseList.map((expense) => expense.amount));

  // return (
  //   // <div className={style.mainContainer}>
  //   //   <div
  //   //     className={style.list}
  //   //     style={{
  //   //       display: "flex",
  //   //       justifyContent: "center",
  //   //       flexDirection: "row",
  //   //       overflowY: "scroll",
  //   //       height: "50vh",
  //   //       width: "80%",
  //   //       margin: "0 auto",
  //   //       marginTop: "100px",

  //   //       boxSizing: "border-box",
  //   //     }}
  //   //   >
  //   //     <Table
  //   //       style={{ width: "100%" }}
  //   //       columns={columns}
  //   //       dataSource={data}
  //   //       pagination={false}
  //   //     />
  //   //   </div>
  //   //   <Chart className="Chart" expensedata={expenseList} />
  //   //   <h3 style={{ textAlign: "center" }}>Total Expense</h3>
  //   //   <h1>
  //   //     <AnimatedNumber value={totalExpenses.toFixed(2)} duration={3000}>
  //   //       {" "}
  //   //     </AnimatedNumber>
  //   //   </h1>
  //   //   <h3 style={{ textAlign: "center" }}>Max Expense</h3>
  //   //   <h1>{maxExpense}</h1>
  //   {
  //      /* <Modal
  //       title="Edit Expense"
  //       open={isModalOpen}
  //       onCancel={handleCancel}
  //       footer={null}
  //     >
  //       <Form id={editExpense} isModalOpen={() => setIsModalOpen(false)} />
  //     </Modal> */
  //   }
  //   // </div>
  // );
  return (
    <div
      style={{
        height: 400,
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      {/* 
      <h1>
        <AnimatedNumber value={totalExpenses} duration={1000}></AnimatedNumber>
      </h1> */}
      <Modal
        disableAutoFocus
        open={isModalOpen}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,

          // backdropFilter: "blur(5px)",
          // backgroundColor: "white",

          background: "rgba(1, 48, 8, 0.69)",

          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "none",

          p: 4,
        }}
      >
        <Box
          sx={{
            border: "none",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            color="white"
            style={{ border: "none" }}
          >
            Add an expense
          </Typography>
          <Form
            id={editExpense}
            style={{
              border: "none",
            }}
            isModalOpen={() => setIsModalOpen(false)}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default List;
