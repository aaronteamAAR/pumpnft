import Header from '../compos/Header'
import styles from '../styles/Index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Typed from "typed.js";
import { useEffect, useRef } from "react";



export default function index(){

const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Promotion", "advertising", "boost"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return(
    
    <div className={styles.body}>
      <div>
    
    </div>
      <svg className={styles.logo} id="logo-58" width="80" height="80" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke" d="M25 43.94H14.06L10.86 38.39L8.28998 33.94L10.86 29.48" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M10.86 29.4801H5.7L3.13 25.0001L6.77 18.6901L8.27001 16.1001L10.87 11.6101L13.44 7.15006L14.06 6.06006H25" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M25 39.48H16.64L13.44 33.94L10.86 29.48L13.47 25H8.28003L11.95 18.63L13.44 16.06L16.01 11.61L16.64 10.52H25" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M25 15.01H19.23L13.47 25L19.23 34.99H25" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M8.28001 25L5.70001 29.48" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M44.3 29.48L41.72 25" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M25 43.94H35.94L39.14 38.39L41.71 33.94L39.14 29.48" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M39.14 29.4801L44.31 29.4401L46.87 25.0001L43.23 18.6901L41.73 16.1001L39.13 11.6101L36.56 7.15006L35.94 6.06006H25" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M25 39.48H33.36L36.56 33.94L39.14 29.48L36.53 25H41.72L38.05 18.63L36.56 16.06L33.99 11.61L33.36 10.52H25" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M25 15.01H30.77L36.53 25L30.77 34.99H25" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M19.23 15.01L16.64 10.52" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10"></path><path className="stroke" d="M30.77 15.01L33.36 10.52" stroke="#231F20" strokeWidth="0.5" strokeMiterlimit="10">
        </path>
        </svg>
      <header className={styles.logoname}>PumpNFT</header>
    <div>
      <div className={styles.twitter}>
       <a href=''><Image  width="20" height= "20"src='/twitter.png' layout='raw' alt='twitter'/></a> 
      </div>
    <div className={styles.head}>The Power of NFT  <b className={styles.bold}> <br />  <span ref={el}></span></b></div>
    <Image className={styles.memoji} width="90" height="90" layout='raw' src='/woman.png' /> 
      <Image className={styles.circleimg} width="50" height="50" src='/circle.png' />
       <div className={styles.button}>
       <button className={styles.button56} role="button"><Link href='/Home'>Get started🚀</Link></button>
       <Image  className={styles.dirline} width="50" height="30" layout='raw' src='/dirline.png' />
       </div>
       <div className={styles.man}>
       <Image  className={styles.manimage} width="400" height="400" layout='raw' src='/name.png'></Image >
       <Image  className={styles.wallet_chart} width="500" height="250" layout='raw' src='/chart.png' />
       </div>
       <div className={styles.footer}>
         <button role="button" className={styles.section}>PumpNFT.Inc<br/><b className={styles.credit} />Made with ❤️ by Zilam</button>
         </div>
    </div>
    </div>
  )
}