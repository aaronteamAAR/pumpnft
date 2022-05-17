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
      <Image className={styles.moncon} src='/03.png'  width="80"
      height="90"  layout='raw'  />
      <Image className={styles.robocorp} width="80"
      height="30" layout='raw'  src='/robocorp.png' />
      <div className={styles.text_sub}>Get your promotion at ease...<br/>Secure, transparent,fast and reliable.</div>
    <div className={styles.maincontainer}>
        <div className={styles.heading}>
        <Image className={styles.mon08}  width="50" height="50"  layout= 'raw' src='/fly.png' />
<Image className={styles.atom}  width="300"
      height="300" layout='raw' src='/atom.png' /> 
          <h1 className={styles.headingtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
       
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i className="fas fa-bolt"></i>Basic</div>
            <p  className={styles.cardexit}><Image  width="18"
      height="18"  className={styles.eth} src='/eth.png' />0.54eth</p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 5% promotion on socials<br></br>* Starting NFT projects </h2>
            <p  className={styles.cardapply}>
              <a  className={styles.cardlink} href="#">Buy Now<i className="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div  className={styles.heading}>
      <Image  width="50"
      height="50" layout='raw' className={styles.mon08} src='/fly.png' />

          <h1  className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i className="fas fa-bolt"></i>Standard</div>
            <p  className={styles.cardexit}><Image className={styles.eth}  width="18"
     height="18" layout='raw' src='/eth.png' />0.75eth<i className="fas fa-times"></i></p>
            <h2 className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 5% promotion on socials<br></br>* NFT projects with 10 - 50 arts</h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink}  href="#">Buy Now<i className="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div className={styles.heading}>
      <Image className={styles.mon08} width="50" height="50" layout='raw' src='/fly.png' />
          <h1 className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i className="fas fa-bolt"></i>Super</div>
            <p className={styles.cardexit}><Image className={styles.eth} width="18"
     height="18"  layout='raw'  src='/eth.png' />0.95eth<i className="fas fa-times"></i></p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 20% promotion on socials<br></br>* NFT projects with 50+ arts </h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink} href="#">Buy Now<i className="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div className={styles.heading}>
      <Image className={styles.mon08} width="50"
      height="50" layout='raw'  src='/fly.png' />

          <h1  className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i className="fas fa-bolt"></i>Growth</div>
            <p className={styles.cardexit}><Image className={styles.eth} width="18"
     height="18"  layout='raw' src='/eth.png' />1.5eth<i className="fas fa-times"></i></p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 35% promotion on socials<br></br>* NFT projects with 100+ arts </h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink} href="#">Buy Now<i className="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <div  className={styles.maincontainer}>
        <div className={styles.heading}>
      <Image className={styles.mon08} width="50"
      height="50" layout='raw'  src='/fly.png' />

          <h1  className={styles.cardtitle}></h1>
          <p className={styles.headingcredits}></p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardcard1}>
            <div className={styles.cardicon}><i className="fas fa-bolt"></i>Ultimate</div>
            <p className={styles.cardexit}><Image className={styles.eth}  width="18"
      height="18" layout='raw' src='/eth.png' />1.9eth<i className="fas fa-times"></i></p>
            <h2  className={styles.cardtitle}>* Increase in volume trade<br></br>* Increase in number of owners<br></br>* 50% promotion on socials<br></br>* NFT projects more than 100+ </h2>
            <p  className={styles.cardapply}>
              <a className={styles.cardlink} href="#">Buy Now<i className="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
      <Image className={styles.sixline} width="200"
      height="200" layout='raw'  src='/sixline.png' />
      </div>
      <footer className={styles.footer}><section className={styles.foo}>Pump NFT©<br />Made by <b className={styles.bd}>Pump Promoters</b></section></footer>
    </div>
  )
}
