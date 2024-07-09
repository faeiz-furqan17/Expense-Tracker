import express from "express";

// Import Firebase functions and services

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
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
    const result = await addDoc(collection(db, "expenses"), data);
    res.json({ message: "Document added successfully", result });
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
    res.json({ message: "Document updated successfully", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

export default router;
