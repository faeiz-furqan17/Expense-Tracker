import React from 'react'
import { useState } from 'react'

function StudentDetailsForm(props) {
    const [studentdata,setStudentData]=useState({
        rollno:'',
        name:'',
        email:'',
        phone:'',
        address:'',
        city:'',
        class:'',

    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setStudentData({
           ...studentdata,
            [name]:value
        })
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(studentdata)
    }
 
  return (
    props.show ?
    <div>
      
      <section className='student-form-section'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='rollno'>Roll No</label>
                <input type='text' name='rollno' id='rollno' value={studentdata.rollno} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' value={studentdata.name} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={studentdata.email} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='phone' id='phone' value={studentdata.phone} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='address'>Address</label>
                <input type='text' name='address' id='address' value={studentdata.address} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='city'>City</label>
                <input type='text' name='city' id='city' value={studentdata.city} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='class'>Class</label>
                <input type='text' name='class' id='class' value={studentdata.class} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <input type='submit' value='Submit' />
            </div>

        </form>
      </section>
    </div> : <></>
  )
}

export default StudentDetailsForm
