import Layout from "@/components/layout/layout";
import Image from "next/image";
import styles from "@/styles/about.module.css";
import _Kz8nHVg_tGI from "../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
import _g1Kr4Ozfoac from "../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import _5fNmWej4tAA from "../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";

export default function About() {
  return (
    <Layout>
      <h1>О компании</h1>
      <div>
        <p>
          Компания Web Studio была основана в 2010 году. На данный момент мы
          предлагаем широкий спектр услуг по созданию сайтов.
        </p>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <h3>Отдел маркетинга</h3>
          <div className={styles.content}>
            <Image
              className={styles.image}
              src={_Kz8nHVg_tGI}
              alt="https://unsplash.com/photos/Kz8nHVg_tGI"
            />
            <div> __ текст __ </div>
          </div>
        </div>

        <div className={styles.item}>
          <h3>Инженеры-разработчики</h3>
          <div className={styles.content}>
            <Image
              className={styles.image}
              src={_g1Kr4Ozfoac}
              alt="https://unsplash.com/photos/g1Kr4Ozfoac"
            />
            <div> __ текст __ </div>
          </div>
        </div>

        <div className={styles.item}>
          <h3>Отдел продаж</h3>
          <div className={styles.content}>
            <Image
              className={styles.image}
              src={_5fNmWej4tAA}
              alt="https://unsplash.com/photos/5fNmWej4tAA"
            />
            <div> __ текст __ </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
