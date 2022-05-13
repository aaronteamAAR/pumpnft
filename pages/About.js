import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div>
        
        <Image  className={styles.board} src='board.png' />
        <div className={styles.header}>
         <h4 className={styles.about}>About Us</h4>
            <h1  className={styles.abthd}>We are the best NFT promoters<br /> in town</h1>
             <p className={styles.abtbd}>We help you get your NFT project attention thereby increasing<br />
            it's chance of success in the marketplace, we have helped a few number<br />
            <Image  className={styles.vol} src='vol.png' />
            of NFT projects get a place on the market using our highly interactive<br />
            promotion tatics</p>
            <button className={styles.button}>
  <div className={styles.svg_wrapper_1}>
    <div className={styles.svgwrapper}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span className={styles.send}>Email Us</span>
</button>
            </div>
         <div className={styles.end}>
             Made with ❤️ by zilam.inc
             </div>
        </div>
  )
}

export default About