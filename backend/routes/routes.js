import express from "express";

// Import Firebase functions and services

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase.js";
const router = express.Router();
//show all expenses
router.get("/expenses", async function (req, res) {
  const expenseFirebase = await getDocs(collection(db, "expenses"));
  const expenses = expenseFirebase.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  res.json(expenses);
});
router.get("/expense/:id", async function (req, res) {
  const { id } = req.params;
  const docRef = doc(db, "expenses", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists) {
    return res.status(404).json({ message: "Document not found" });
  }
  const expense = docSnap.data();
  // expense.id = docSnap.id;
  res.json({
    id: expense.id,
    name: expense.name,
    amount: expense.amount,
    date: expense.date,
  });
});

//delete a single expense
router.delete("/expenses/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteDoc(doc(db, "expenses", id));
    res.json({ message: "Document deleted successfully", result });
  } catch (error) {
    res.stautus(500).json({ error: error });
  }
});

//add a new expense
router.post("/expenses/add", async (req, res) => {
  const data = req.body;
  console.log("i am the req body =>", data);

  try {
    debugger;
    const result = await addDoc(collection(db, "expenses"), data);

    const docRef = doc(db, "expenses", result.id);
    const docSnap = await getDoc(docRef);

    res.json({
      message: "Document added successfully",
      result: docSnap.data(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.put("/expenses/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log("i am the req body =>", data);

  try {
    const expenseRef = doc(db, "expenses", id);
    // console.log("previous expense  =>", expenseRef);
    const result = await updateDoc(expenseRef, data);

    const docRef = doc(db, "expenses", id);
    const docSnap = await getDoc(docRef);

    res.json({
      message: "Document updated successfully",
      result: docSnap.data(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

export default router;
