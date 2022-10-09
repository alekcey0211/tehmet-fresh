import { PageProps } from "$fresh/server.ts";
import { PageData } from "../../context/page-context.tsx";
import { BaseCompact } from "../../components/layout.tsx";
import { Defaulter } from "../../components/sections/defaulter/defaulter.tsx";
import { DefaulterList } from "../../components/sections/defaulter/defaulters-list.tsx";

type Data = PageData;

// export const handler: Handlers<Data> = {
//   async GET(_req, ctx) {
//     const categories = pageCache.has("categories")
//       ? pageCache.get("categories")!
//       : await fetchCategories();

//     if (!isProduction) pageCache.set("categories", categories);

//     return ctx.render({
//       categories,
//     });
//   },
// };

export default function DefaulterRoute(ctx: PageProps<Data>) {
  return (
    <BaseCompact pageData={ctx} title="Неплательщики">
      <Defaulter />
      <DefaulterList />
    </BaseCompact>
  );
}