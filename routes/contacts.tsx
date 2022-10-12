import { PageProps } from "$fresh/server.ts";
import { PageData } from "../context/page-context.tsx";
import { LayoutCompact } from "../components/layout.tsx";
import { Contacts } from "../components/sections/contacts/contacts.tsx";

type Data = PageData;

export default function ContactsRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="Контакты">
      <Contacts />
    </LayoutCompact>
  );
}
