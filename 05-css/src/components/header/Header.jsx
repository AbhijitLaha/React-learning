import React from 'react'
 import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>Sheryians</h3>
        <button className='btn'>Login</button>
    </div>
  )
}

export default Header 