import Layout from "@/components/layout/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@/styles/portfolio.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export interface PortfolioItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type ItemsByGroup = [string, PortfolioItem[]][];

export const PHOTOS_API_URL = "https://jsonplaceholder.typicode.com/photos";

export default function Portfolio() {
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);
  const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);

  function prepareData(items: PortfolioItem[]) {
    const itemsByGroup: ItemsByGroup = [];
    const groopTitle = ["Корпоративные сайты", "CRM-системы", "Прочие проекты"];
    const count = 3;
    for (let i = 0; i < items.length; i += count) {
      if (itemsByGroup.length < 1) {
        itemsByGroup.push([groopTitle[0], items.slice(i, i + count)]);
      } else if (itemsByGroup.length < 2) {
        itemsByGroup.push([groopTitle[1], items.slice(i, i + count)]);
      } else {
        itemsByGroup.push([groopTitle[2], items.slice(i, i + count)]);
      }
    }

    // itemsByGroup.map((group) => {
    //   group[1].map((item) => {
    //     console.log(item);
    //     console.log(item.url);
    //     item.url = `/portfolio/${item.id}`;
    //   });
    // });

    return itemsByGroup;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const load = async () => {
    try {
      const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
      const prepared = prepareData(data.slice(0, 7));
      setItems(prepared);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <Layout>... loading ...</Layout>;
  }

  return (
    <Layout>
      <h1>Наши работы</h1>

      {itemsByGroup?.length ? (
        <div>
          {itemsByGroup.map((group, i) => (
            <div key={i} className={styles.groupWrapper}>
              <h2>{group[0]}</h2>

              <div className={styles.listGroup}>
                {group[1].map((item) => (
                  <div
                    key={item.id}
                    className={styles.groupItem}
                    onClick={() => push(`/portfolio/${item.id}`)}
                  >
                    <Image
                      src={item.thumbnailUrl}
                      width={150}
                      height={150}
                      alt={item.title}
                    />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Ничего не найдено</div>
      )}
    </Layout>
  );
}
