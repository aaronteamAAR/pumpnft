import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
   <div className={styles.body}>
      <img className={styles.sixline} src='sixline.png' />
   <nav className={styles.navbar}>
      <ul className={styles.navbar_nav}>
        <li className={styles.nav_item}><a href='/'>Home</a></li>
        <li className={styles.nav_item}><a href='/'>Contact</a></li>
        <li className={styles.nav_item}><a href='/About'>About</a></li>
      </ul>
    </nav>
   </div>
  )
}

export default Header