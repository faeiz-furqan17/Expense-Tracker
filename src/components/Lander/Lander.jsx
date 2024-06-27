import React from 'react'
import styles from './Lander.module.scss';
import Lottie from 'lottie-react'
import animationData from '../../assets/Lottie Json/Animation - 1719397582348.json'



function Lander() {
  return (
    <div style={{marginTop:'5%',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center' , height:'auto'}}>
        <div className={styles.lottie}>
          <Lottie className={styles.lottie} animationData={animationData}  style={{position:'absolute',height:'90dvh'}}/>
          
        </div>

      <h1 className={styles.landerHeading} style={{textAlign:'center', fontWeight:'400' }}>
        Expense Tracker
      </h1>
    </div>
  )
}

export default Lander
