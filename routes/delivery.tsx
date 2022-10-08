import { PageProps } from "$fresh/server.ts";
import { PageData } from "../context/page-context.tsx";
import { BaseCompact } from "../components/layout.tsx";
import { DeliveryTitle } from "../components/sections/delivery/delivery-title.tsx";
import { Cargo } from "../components/sections/delivery/cargo.tsx";
import { DeliveryTime } from "../components/sections/delivery/delivery-time.tsx";
import { Contacts } from "../components/sections/delivery/contacts.tsx";

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

export default function DeliveryRoute(ctx: PageProps<Data>) {
  return (
    <BaseCompact pageData={ctx} title="Доставка">
      <DeliveryTitle />
      <Cargo />
      <DeliveryTime />
      <Contacts />
    </BaseCompact>
  );
}
