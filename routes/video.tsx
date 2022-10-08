import { PageProps } from "$fresh/server.ts";
import { PageData } from "../context/page-context.tsx";
import { BaseCompact } from "../components/layout.tsx";

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

export default function VideoRoute(ctx: PageProps<Data>) {
  return <BaseCompact pageData={ctx} title="Видео"></BaseCompact>;
}
