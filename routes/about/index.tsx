import { PageProps } from "$fresh/server.ts";
import { PageData } from "../../context/page-context.tsx";
import { LayoutCompact } from "../../components/layout.tsx";
import { AboutTitle } from "../../components/sections/about/about.tsx";
import { Goal } from "../../components/sections/about/goal.tsx";
import { Principles } from "../../components/sections/about/principles.tsx";
import { GeographySales } from "../../components/sections/about/geography-sales.tsx";
import { Certificates } from "../../components/sections/about/certificates.tsx";
import { Parners } from "../../components/sections/about/partners.tsx";
import { Charity } from "../../components/sections/about/charity.tsx";

type Data = PageData;

export default function AboutRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="О компании">
      <AboutTitle />
      <Goal />
      <Principles />
      <GeographySales />
      <Parners />
      <Certificates />
      <Charity />
    </LayoutCompact>
  );
}
