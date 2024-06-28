import React, { useState,useEffect } from 'react';
import styles from './Navbar.module.scss';
import Form from '../Form/Form';

function Navbar() {
 const [showForm,setShowForm]=useState(false)
 const[addButton,removeButton]=useState("Add")
 const handleAddClick =() => {
   setShowForm(!showForm)

   
 }
//  useEffect(() =>{
//   //  if(showForm){
//   //    removeButton("close")
//   //  }else{
//   //    removeButton("Add")
//   //  }
//   console.log("here here")
//  })

  return (
<>

<header>
  <nav>
    <h1>Expense Tracker</h1>
    <button onClick={handleAddClick}>{addButton}</button>
{showForm ?<Form onShow={()=>{
  setShowForm(false)
  
}}></Form> :<></>} 
    <ul>
      <li>

        <button>Dashboard</button>
      </li>
    </ul>
  </nav>
</header>


</>
  );
}

export default Navbar;
