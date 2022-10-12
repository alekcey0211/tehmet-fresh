import { PageProps } from "$fresh/server.ts";
import { PageData } from "../../context/page-context.tsx";
import { LayoutCompact } from "../../components/layout.tsx";
import { Defaulter } from "../../components/sections/defaulter/defaulter.tsx";
import { DefaulterList } from "../../components/sections/defaulter/defaulters-list.tsx";

type Data = PageData;

export default function DefaulterRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="Неплательщики">
      <Defaulter />
      <DefaulterList />
    </LayoutCompact>
  );
}
