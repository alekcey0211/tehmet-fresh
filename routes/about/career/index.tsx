import { PageProps } from "$fresh/server.ts";
import { PageData } from "../../../context/page-context.tsx";
import { LayoutCompact } from "../../../components/layout.tsx";
import { CareerTitle } from "../../../components/sections/career/career.tsx";
import { PeopleMain } from "../../../components/sections/career/people-main.tsx";
import { MainPrinciple } from "../../../components/sections/career/main-principle.tsx";
import { WhyEmployeeWork } from "../../../components/sections/career/why-employee-work.tsx";
import { PublicLife } from "../../../components/sections/career/public-life.tsx";

type Data = PageData;

export default function CareerRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="Карьера">
      <CareerTitle />
      <PeopleMain />
      <MainPrinciple />
      <WhyEmployeeWork />
      <PublicLife />
    </LayoutCompact>
  );
}
