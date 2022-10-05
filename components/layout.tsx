import { PageProps } from "$fresh/server.ts";
import { Page, PageData } from "../context/page-context.tsx";
import { Dialogs } from "./dialogs.tsx";
import { HeadElement } from "./head-element.tsx";
import { HeaderCompact } from "./header-compact.tsx";
import { Header } from "./header.tsx";
import { Nav } from "./nav.tsx";

export const Base = ({
  pageData,
  title,
  description,
  image,
}: { pageData: PageProps<PageData> } & Parameters<
  typeof HeadElement
>[number]) => {
  return (
    <Page.Provider value={pageData}>
      <HeadElement title={title} description={description} image={image} />
      <Header />
      <Nav />
      <main class="z-10"></main>
      <Dialogs />
    </Page.Provider>
  );
};

export const BaseCompact = ({
  pageData,
  title,
  description,
  image,
}: { pageData: PageProps<PageData> } & Parameters<
  typeof HeadElement
>[number]) => {
  return (
    <Page.Provider value={pageData}>
      <HeadElement title={title} description={description} image={image} />
      <HeaderCompact />
      <Nav />
      <main class="z-10"></main>
      <Dialogs />
    </Page.Provider>
  );
};
