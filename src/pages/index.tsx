import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tip Calculator APP</title>
        <meta name="description" content="Tip Calculator APP" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.splitter}>
        <span>SPLI</span>
        <span>TTER</span>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <p>Bill</p>
          <input type="number" />

          <p>Select Tip %</p>
          <div>5%</div>
          <div>10%</div>
          <div>15%</div>
          <div>25%</div>
          <div>50%</div>
          <div>Custom</div>

          <p>Number of People</p>
          <input type="number" />
        </div>
      </div>

    </div>
  )
}

export default Home
