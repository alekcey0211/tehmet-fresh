import { HeadElement } from "../components/head-element.tsx";
import { PageProps } from "$fresh/server.ts";
import { Header } from "../components/header.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;

  return (
    <>
      <HeadElement title="О компании" url={url} />
      <Header />
      <main class="z-10"></main>
    </>
  );
}
