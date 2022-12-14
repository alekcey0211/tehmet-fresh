import { PageProps } from "$fresh/server.ts";
import { Page, PageData } from "../context/page-context.tsx";
import { Dialogs } from "./dialogs.tsx";
import { HeadElement } from "./head-element.tsx";
import { HeaderCompact } from "./header-compact.tsx";
import { Header } from "./header.tsx";
import { Nav } from "./nav.tsx";
import { ComponentChildren } from "preact";
import { Footer } from "./footer.tsx";

export const LayoutBase = ({
  pageData,
  title,
  description,
  image,
  children,
  isCompact,
}: {
  pageData: PageProps<PageData>;
  children?: ComponentChildren;
  isCompact?: boolean;
} & Parameters<typeof HeadElement>[number]) => {
  return (
    <Page.Provider value={pageData}>
      <svg class="absolute" height="0" width="0">
        <clipPath id="form-01" clipPathUnits="objectBoundingBox">
          <path d="M0.39,0 h0.314 L1,0.002 l-0.062,0.668 c-0.017,0.18,-0.165,0.328,-0.328,0.328 h-0.314 L0,1,0.062,0.328 C0.079,0.148,0.226,0,0.39,0"></path>
        </clipPath>
      </svg>
      <HeadElement title={title} description={description} image={image} />
      {isCompact ? <HeaderCompact /> : <Header />}
      <Nav />
      {children}
      <Footer />
      <Dialogs />
    </Page.Provider>
  );
};

export const Layout = ({
  children,
  ...props
}: { pageData: PageProps<PageData>; children?: ComponentChildren } & Parameters<
  typeof HeadElement
>[number]) => {
  return (
    <LayoutBase {...props}>
      <main class="z-10">{children}</main>
    </LayoutBase>
  );
};

export const LayoutCompact = ({
  children,
  ...props
}: { pageData: PageProps<PageData>; children?: ComponentChildren } & Parameters<
  typeof HeadElement
>[number]) => {
  return (
    <LayoutBase {...props} isCompact={true}>
      <main class="z-10">{children}</main>
    </LayoutBase>
  );
};
