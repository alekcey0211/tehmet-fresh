import { PageProps } from "$fresh/server.ts";
import { PageData } from "../../context/page-context.tsx";
import { LayoutCompact } from "../../components/layout.tsx";
import { TeamTitle } from "../../components/sections/team/team.tsx";
import { Employees } from "../../components/sections/team/employees.tsx";

type Data = PageData;

export default function TeamRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="Наша команда">
      <TeamTitle />
      <Employees />
    </LayoutCompact>
  );
}
