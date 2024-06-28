import React from 'react'
import { useState } from 'react'
function SimpleForm() {
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const handleEmailChange=(e)=>{
setEmail(e.target.value)
}

const handlePasswordChange=(e)=>{
setPassword(e.target.value)
}

const handleNameChange=(e)=>{
setName(e.target.value)
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(name)

console.log(email)

console.log(password)
}
  return (
    <div>
        <section className='form-section'>
        <h1>Simple Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name'  value={name} onChange={handleNameChange}/>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' value={email} onChange={handleEmailChange} />
            <label htmlFor='password'>Password</label>
            <input name='password' id='password' value={password} onChange={handlePasswordChange} />
            <input type='submit' value='Submit' />
        </form>

        </section>
      
    </div>
  )
}

export default SimpleForm
