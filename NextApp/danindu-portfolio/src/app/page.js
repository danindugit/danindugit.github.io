import Image from "next/image";
import styles from "./page.module.css";
import HeroArea from "./components/HeroArea";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroArea className='homeHero' text={<div className="container">
          <div className="row">
            <div className="col">
              <h1 className={styles.title}>Danindu Marasinghe</h1>
              <h2 className={styles.subtitle}>Full Stack Software Developer</h2>
            </div>
          </div>
        </div>} />

        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
