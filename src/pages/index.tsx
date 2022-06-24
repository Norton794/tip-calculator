import type { NextPage } from 'next'
import Head from 'next/head'
import Splitter from '../components/Splitter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tip Calculator APP</title>
        <meta name="description" content="Tip Calculator APP" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Splitter />

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.left}>
            <span>Bill</span>
            <input type="number" />

            <span>Select Tip %</span>
            <div>5%</div>
            <div>10%</div>
            <div>15%</div>
            <div>25%</div>
            <div>50%</div>
            <div>Custom</div>

            <span>Number of People</span>
            <input type="number" />
          </div>

          <div className={styles.right}>
            <div>

              Tip Amount
              / per person

              $0.00
            </div>
            <div>

              Total

              / person

              $0.00
            </div>

            <div>Reset</div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
