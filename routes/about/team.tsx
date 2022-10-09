import { PageProps } from "$fresh/server.ts";
import { PageData } from "../../context/page-context.tsx";
import { BaseCompact } from "../../components/layout.tsx";
import { TeamTitle } from "../../components/sections/team/team.tsx";
import { Employees } from "../../components/sections/team/employees.tsx";

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

export default function TeamRoute(ctx: PageProps<Data>) {
  return (
    <BaseCompact pageData={ctx} title="Наша команда">
      <TeamTitle />
      <Employees />
    </BaseCompact>
  );
}
