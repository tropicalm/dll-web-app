import Head from "next/head";

const Home = () => (
  <div className="container mx-auto">
    <Head>
      <title>Deep Learning Labs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">DLL!</a>
      </h1>

      <p className="description">Brining AI talent togheter</p>

      <div className="grid">
        <a href="/about" className="card">
          <h3>About &rarr;</h3>
          <p>Find in-depth information about DLL features and events.</p>
        </a>

        <a href="/team" className="card">
          <h3>Team &rarr;</h3>
          <p>Create a Team and invite your team members!</p>
        </a>

        <a href="/team/admin" className="card">
          <h3>Leaderboard &rarr;</h3>
          <p>Live leaderboard & Global leaderboards</p>
        </a>

        <a href="/user/mathias" className="card">
          <h3>Users page &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with ZEIT Now.
          </p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Nextgrid
      </a>
    </footer>
  </div>
);

export default Home;
