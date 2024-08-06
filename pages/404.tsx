import Layout from "@/components/layout/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <div>
        <h1>К сожалению, такой страницы не существует</h1>
        <div>
          Вы можете вернуться на <a href="/">главную страницу</a>, либо оставить
          свой комментарий на
          <a href="/contacts"> странице контактов</a>.
        </div>
      </div>
    </Layout>
  );
}
