import { PageProps } from "$fresh/server.ts";
import { PageData } from "../context/page-context.tsx";
import { LayoutCompact } from "../components/layout.tsx";
import { DeliveryTitle } from "../components/sections/delivery/delivery-title.tsx";
import { Cargo } from "../components/sections/delivery/cargo.tsx";
import { DeliveryTime } from "../components/sections/delivery/delivery-time.tsx";
import { Contacts } from "../components/sections/delivery/contacts.tsx";

type Data = PageData;

export default function DeliveryRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="Доставка">
      <DeliveryTitle />
      <Cargo />
      <DeliveryTime />
      <Contacts />
    </LayoutCompact>
  );
}
