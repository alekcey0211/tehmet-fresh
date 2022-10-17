import { Page } from "../context/page-context.tsx";
import CategoriesNavDropdown from "../islands/CategoriesNavDropdown.tsx";
import { navItems } from "../shared/nav-items.ts";
import { useContext } from "preact/hooks";
import NavDropdown from "../islands/NavDropdown.tsx";

export function Nav() {
  const { url } = useContext(Page);
  return (
    <nav class="sticky top-0 z-20 bg-white header-nav-shadow">
      <ul class="hidden lg:grid grid-cols-5 max-w-fullhd mx-auto">
        {navItems.map((item) => {
          const isActive = item.link === url.pathname;

          if (item.link === "/catalog") {
            return <CategoriesNavDropdown pathname={url.pathname} />;
          }

          if (item.items?.length) {
            return (
              <NavDropdown
                pathname={url.pathname}
                text={item.text}
                link={item.link}
                items={item.items}
              />
            );
          }

          return (
            <li
              class={`text-3xl text-dark-blue grid grid-cols-1 grid-rows-1 place-content-center h-[70px] relative whitespace-nowrap lowercase after::absolute after::right-0 after::top-2 after::bottom-2 after::border-r-2 after::border-[#C4C4C4]`}
            >
              <a
                href={item.link}
                class={`!grid place-content-center px-4 nav-item-link ${
                  isActive && "gradient-text"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
