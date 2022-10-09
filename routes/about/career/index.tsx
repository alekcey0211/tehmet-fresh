import { PageProps } from "$fresh/server.ts";
import { PageData } from "../../../context/page-context.tsx";
import { BaseCompact } from "../../../components/layout.tsx";
import { CareerTitle } from "../../../components/sections/career/career.tsx";
import { PeopleMain } from "../../../components/sections/career/people-main.tsx";
import { MainPrinciple } from "../../../components/sections/career/main-principle.tsx";
import { WhyEmployeeWork } from "../../../components/sections/career/why-employee-work.tsx";
import { PublicLife } from "../../../components/sections/career/public-life.tsx";

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

export default function CareerRoute(ctx: PageProps<Data>) {
  return (
    <BaseCompact pageData={ctx} title="Карьера">
      <CareerTitle />
      <PeopleMain />
      <MainPrinciple />
      <WhyEmployeeWork />
      <PublicLife />
    </BaseCompact>
  );
}
