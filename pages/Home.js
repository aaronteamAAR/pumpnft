import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../compos/Header'

export default function Home() {
  return (
  
    <div className={styles.html}>
       <Header />
      <div className={styles.cover}>
      <div className={styles.texts_head}>Boost Your NFT🚀.<br/>Increase your chance of success!</div>
      <img className={styles.moncon} src='03.png' /><img className={styles.robocorp} src='robocorp.png' />
      <div className={styles.text_sub}>Get your promotion at ease...<br/>Secure, transparent,fast and reliable.</div>
    <div className={styles.maincontainer}>
        <div className={styles.heading}>
      <img className={styles.mon08} src='fly.png' />
<img className={styles.atom} src='atom.png' /> 
          <h1 className={styles.headingtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
       
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i class="fas fa-bolt"></i>Basic</div>
            <p  className={styles.cardexit}><img className={styles.eth} src='eth.png' />0.54eth</p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 5% promotion on socials<br></br>* Starting NFT projects </h2>
            <p  className={styles.cardapply}>
              <a  className={styles.cardlink} href="#">Buy Now<i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div  className={styles.heading}>
      <img className={styles.mon08} src='fly.png' />

          <h1  className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i class="fas fa-bolt"></i>Standard</div>
            <p  className={styles.cardexit}><img className={styles.eth} src='eth.png' />0.75eth<i class="fas fa-times"></i></p>
            <h2 className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 5% promotion on socials<br></br>* NFT projects with 10 - 50 arts</h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink}  href="#">Buy Now<i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div className={styles.heading}>
      <img className={styles.mon08} src='fly.png' />
          <h1 className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i class="fas fa-bolt"></i>Super</div>
            <p className={styles.cardexit}><img className={styles.eth} src='eth.png' />0.95eth<i class="fas fa-times"></i></p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 20% promotion on socials<br></br>* NFT projects with 50+ arts </h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink} href="#">Buy Now<i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div className={styles.heading}>
      <img className={styles.mon08} src='fly.png' />

          <h1  className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i class="fas fa-bolt"></i>Growth</div>
            <p className={styles.cardexit}><img className={styles.eth} src='eth.png' />1.5eth<i class="fas fa-times"></i></p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 35% promotion on socials<br></br>* NFT projects with 100+ arts </h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink} href="#">Buy Now<i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div className={styles.heading}>
      <img className={styles.mon08} src='fly.png' />

          <h1  className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i class="fas fa-bolt"></i>Ultimate</div>
            <p className={styles.cardexit}><img className={styles.eth} src='eth.png' />1.9eth<i class="fas fa-times"></i></p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 50% promotion on socials<br></br>* NFT projects more than 100+ </h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink} href="#">Buy Now<i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <img className={styles.sixline} src='sixline.png' />
      </div>
      <footer className={styles.footer}><section className={styles.foo}>NFT Pump©<br />Made by <b className={styles.bd}>Pump promoters</b></section></footer>
    </div>
  )
}
