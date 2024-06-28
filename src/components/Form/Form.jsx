import React, { useState } from 'react'

function Form({showForm,onShow}) {


  const [expenseData,setExpenseData] = useState({

    name: '',
    amount: '',
    date:'',
  })

const handleChange = (e) => {
  const { name, value } = e.target
  setExpenseData({
   ...expenseData,
    [name]: value
  })
}

  const handleFormSubmission =(e)=>{
  onShow()
    e.preventDefault()
    console.log(expenseData)
    setExpenseData({
      name: '',
      amount: '',
      date:'',
    })


  }
  return (
    showForm ?
    <div>
<section className='add-expense-section'>
  <form >
    <h1>Add Expense</h1>
    <label htmlFor='name'>Name</label>
    <input type='text' name='name' id='name' value={expenseData.name} onChange={handleChange} />
    <label htmlFor='amount'>Amount</label>
    <input type='text' name='amount' id='amount' value={expenseData.amount} onChange={handleChange} />
    <label htmlFor='date'>Date</label>
    <input type='date' name='date' id='date' value={expenseData.date} onChange={handleChange}/>
    <button type='submit' onClick={handleFormSubmission}>add expense</button>
    
  </form>
</section>
    </div>
    : <>
    </>
  )
}

export default Form
