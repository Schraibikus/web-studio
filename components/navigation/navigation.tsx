import Link from "next/link";
import styles from "./navigation.module.css";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li
          className={clsx(styles.item, {
            [styles.disabled]: router.pathname === "/",
          })}
        >
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.item}>
          <Link href="/about">О компании</Link>
        </li>
        <li className={styles.item}>
          <Link href="/portfolio">Портфолио</Link>
        </li>
        <li className={styles.item}>
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}
