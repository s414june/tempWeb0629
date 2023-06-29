import Head from 'next/head';
import Link from 'next/link';
import Ourvalueanimate from '../components/ourvalueanimate';
import styles from '../styles/Home.module.css';
// import '../styles/app.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.nav}>
          <img src='https://alljoint.tw/images/index-page/logo.svg' alt='All Joint 傲嬌文創'></img>
        </nav>
        <div className={styles.banner}></div>
        <img src='https://alljoint.tw/images/index-page/arrow.svg' className={styles.down}></img>
      </header>
      <main>
        <section>
          <section>
            <section className={styles.heading1}>
              <h1>
                <span className={styles.bigfontsize}>Our Value</span> 核心價值
              </h1>
              <hr className={styles["separate-line"]}></hr>
              <article className={styles.content}>
                <h2 className={styles["margin-bottom-sm"]} data-v-5bb940ab="">專案開發之時，您曾遇過以下問題嗎？</h2>
                <p className={[styles.hightlight, styles["margin-bottom-sm"]].join(' ')}>
                  1. 由於一開始不完整的規劃，導致資金燒盡，不斷追加預算，卻無法完成專案。
                </p>
                <p className={[styles.hightlight, styles["margin-bottom-sm"]].join(' ')}>
                  2. 斥資金萬，做出的產品卻無法符合市場變化。
                </p>
              </article>
              <hr className={styles["separate-line"]} style={{transform:'translateY(1px)'}}></hr>
              <Ourvalueanimate />
              <hr className={styles["separate-line"]} style={{transform:'translateY(-13px)'}}></hr>
              <article className={styles.content}>
                <p className={styles.paragraph}>
                根據主計處統計，政府委外專案無法如期驗收的主因為——「需求變更」，其比例竟高達 76.3%，而不在數據內的民間企業，需求變更也幾乎是必定發生的問題。
                </p>
                <p className={styles.paragraph}>
                政府資源穩定性高，通常藉由追加預算來解決困境。但民間企業卻不如政府穩定，燒了錢也可能換不回歷年辛苦的成果。
                </p>
                <p className={styles.paragraph}>
                傲嬌文創了解大家在專案開發上的困境，我們的服務中加入了時間成本的考量，讓專案不再被時間追趕，能在「有限時間內賺錢」且「達成目標」。
                </p>
              </article>
            </section>
            <h1 className={styles.title}>
              Read <Link href="/posts/first-post">this page!</Link>
            </h1>

            <p className={styles.description}>
              Get started by editing <code>pages/index.js</code>
            </p>

            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </section>
        </section>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
  )
}
