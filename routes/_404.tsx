import { PageProps } from "$fresh/server.ts";
import { Layout } from "../components/layout.tsx";

export default function PageNotFound(ctx: PageProps) {
  return (
    <Layout pageData={ctx} title="Страница не найдена">
      <section class="w-full flex items-center justify-center py-20">
        <div class="text-center">
          <h1 class="text-6xl md:text-9xl font-extrabold">404</h1>
          
          <p class="p-4 text-2xl md:text-3xl">
            К сожалению, страница, которую вы запросили, не была найдена
          </p>

          <p class="p-4 text-base">
            Вы можете перейти на&nbsp;
            <a href="/" class="text-blue hover:underline">
              главную страницу
            </a>
            &nbsp;или воспользоваться&nbsp;
            <a href="/catalog" class="text-blue hover:underline">
              каталогом товаров
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
