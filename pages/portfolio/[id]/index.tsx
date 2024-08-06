import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import styles from "@/styles/portfolio.module.css";
import { PHOTOS_API_URL, PortfolioItem } from "@/pages/portfolio";
import axios from "axios";

interface ItemProps {
  portfolioItem: PortfolioItem;
}

export async function getServerSideProps({
  params,
}: {
  params: { id: number };
}) {
  const url = `${PHOTOS_API_URL}/${params.id}`;
  const { data } = await axios.get<PortfolioItem[]>(url);
  return {
    props: { portfolioItem: data },
  };
}

export default function Item({ portfolioItem }: ItemProps) {
  return (
    <Layout>
      <div className={styles.item}>
        <h1>Проект: {portfolioItem.title}</h1>
        <Image
          src={portfolioItem.url}
          width={400}
          height={400}
          alt={portfolioItem.title}
        />
        <div>
          <Link className={styles.link} href="/portfolio">
            Назад к списку работ
          </Link>
        </div>
      </div>
    </Layout>
  );
}
