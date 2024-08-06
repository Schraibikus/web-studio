import Layout from "@/components/layout/layout";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <Layout>
      <div>
        <h1>К сожалению, такой страницы не существует</h1>
        <div>
          Вы можете вернуться на <Link href="/">главную страницу</Link>, либо
          оставить свой комментарий на
          <Link href="/contacts"> странице контактов</Link>.
        </div>
      </div>
    </Layout>
  );
}
