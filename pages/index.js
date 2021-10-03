import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GTech 𝝁Learn Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        GTech 𝝁Learn Industry Connect
        </h1>

        <p className="description"> Youtube live of Industry introductory meet</p>
    
    <div className="grid">
    <h2>Click on the box &darr;</h2></div>

        <div className="grid">

          <a href="https://www.youtube.com/watch?v=o-3x_9yWHVk" className="card">
            <h3>Day 1 &rarr;</h3>
            <img src="/Day1.png" className="image"/>
            <p>SunTec Business Solutions Pvt. Ltd</p>
          </a>


        </div>
      </main>

      <footer>
        <a href="https://atfg.gtechindia.org/" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
           <img src="/logo.png" alt="Gtech Mulearn" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .click {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
        }

        .center {
          display: flex;
          justify-content: center;
        }

        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 300px;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: #0070f3;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #c4302b;
          border-color: #c4302b;
        }

        .card h3 {
          display: flex;
          justify-content: center;
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
