import { PropsWithChildren } from "react";
import Head from "next/head";
import Navigation from "../navigation/navigation";
import styles from "./layout.module.css";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
// import { FOOTER_EMAIL } from "@/const";

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Web Studio</title>
        <meta name="description" content="SkillFactory Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link
            href="/"
            className={clsx(styles.logo, {
              [styles.disabled]: router.pathname === "/",
            })}
          >
            WEBSTUDIO
          </Link>
          <Navigation />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          &copy; 2024 Web studio
          <Link href={`mailto:${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</Link>
        </footer>
      </div>
    </>
  );
}
