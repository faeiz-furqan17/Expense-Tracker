import React, { useState } from 'react';
import styles from './Form.module.scss';

function Form({ onClose }) {
  let expenseName = ""
  // const [formData, setFormData] = useState({
  //   expenseName: '',
  //   cost: '',
  //   date: '',
  //   month: '',
  //   category: ''
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    expenseName = value
    console.log(expenseName)
    // setFormData({
    //   ...formData,
    //   [name]: value
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose(); // Close form after submission
  };

  return (
    <div className={styles.formOverlay}>
      <div className={styles.formContainer}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="expenseName">Expense Name</label>
            <input
              type="text"
              id="expenseName"
              name="expenseName"
              // value={expenseName}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className={styles.formGroup}>
            <label htmlFor="cost">Cost</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="month">Month</label>
            <input
              type="month"
              id="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div> */}
          <button type="submit" className={styles.submitButton}>Add Expense</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
