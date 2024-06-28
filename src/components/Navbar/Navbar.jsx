import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Form from '../Form/Form';

function Navbar() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <header>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4-xjZQP_eKyqr_bXBBoqGfKsmVNdYS8mcw&s" alt="Logo" />
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <button onClick={handleAddClick}>
                  new form / add expense 
                </button>
              </li>
              <li>
                <button>
                  <a href="">Dashboard</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {isFormVisible && <Form onClose={handleCloseForm} />}
    </div>
  );
}

export default Navbar;
