import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";

function FoodOrderForm() {
  const [order, setOrder] = useState({
    orderName: "",
    quantity: "",
    price: "",
  });
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const addOrder = async () => {
    const data = order;

    try {
      const res = await addDoc(collection(db, "order"), data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateorder = async () => {
    try {
      const res = await await updateDoc(
        doc(db, "order", "ME11VYuJiCLMNF2xtCv3"),
        {
          price: "100",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const deleteorder = async () => {
    try {
      const res = await deleteDoc(doc(db, "order", "IzkgCvalFBE2IkKAA61U"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label htmlFor="orderName">Order</label>
      <input
        type="text"
        name="orderName"
        id="orderName"
        value={order.orderName}
        onChange={handleChange}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        value={order.quantity}
        onChange={handleChange}
      />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        value={order.price}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={() => {
          addOrder();
        }}
      >
        Submit
      </button>
      <button type="reset">Reset</button>
      <button type="button">Cancel</button>
      <button
        type="button"
        onClick={() => {
          deleteorder();
        }}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => {
          updateorder();
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default FoodOrderForm;
