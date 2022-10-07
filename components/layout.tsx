import { PageProps } from "$fresh/server.ts";
import { Page, PageData } from "../context/page-context.tsx";
import { Dialogs } from "./dialogs.tsx";
import { HeadElement } from "./head-element.tsx";
import { HeaderCompact } from "./header-compact.tsx";
import { Header } from "./header.tsx";
import { Nav } from "./nav.tsx";
import { ComponentChildren } from "preact";
import { Footer } from "./footer.tsx";

export const Base = ({
  pageData,
  title,
  description,
  image,
  children,
}: { pageData: PageProps<PageData>; children?: ComponentChildren } & Parameters<
  typeof HeadElement
>[number]) => {
  return (
    <Page.Provider value={pageData}>
      <svg class="absolute" height="0" width="0">
        <clipPath id="form-01" clipPathUnits="objectBoundingBox">
          <path d="M0.39,0 h0.314 L1,0.002 l-0.062,0.668 c-0.017,0.18,-0.165,0.328,-0.328,0.328 h-0.314 L0,1,0.062,0.328 C0.079,0.148,0.226,0,0.39,0"></path>
        </clipPath>
      </svg>
      <HeadElement title={title} description={description} image={image} />
      <Header />
      <Nav />
      <main class="z-10">{children}</main>
      <Footer />
      <Dialogs />
    </Page.Provider>
  );
};

export const BaseCompact = ({
  pageData,
  title,
  description,
  image,
  children,
}: { pageData: PageProps<PageData>; children?: ComponentChildren } & Parameters<
  typeof HeadElement
>[number]) => {
  return (
    <Page.Provider value={pageData}>
      <svg class="absolute" height="0" width="0">
        <clipPath id="form-01" clipPathUnits="objectBoundingBox">
          <path d="M0.39,0 h0.314 L1,0.002 l-0.062,0.668 c-0.017,0.18,-0.165,0.328,-0.328,0.328 h-0.314 L0,1,0.062,0.328 C0.079,0.148,0.226,0,0.39,0"></path>
        </clipPath>
      </svg>
      <HeadElement title={title} description={description} image={image} />
      <HeaderCompact />
      <Nav />
      <main class="z-10">{children}</main>
      <Footer />
      <Dialogs />
    </Page.Provider>
  );
};
