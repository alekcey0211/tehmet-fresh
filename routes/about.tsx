import { HeadElement } from "../components/head-element.tsx";
import { PageProps } from "$fresh/server.ts";
import { Header } from "../components/header.tsx";
import { Dialogs } from "../components/dialogs.tsx";
import { Nav } from "../components/nav.tsx";

export default function Home(ctx: PageProps) {
  const { url, route } = ctx;

  return (
    <>
      <HeadElement title="О компании" url={url} />
      <Header />
      <Nav route={route} />
      <main class="z-10"></main>
      <Dialogs />
    </>
  );
}
