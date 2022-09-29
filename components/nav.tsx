import { navItems } from "../shared/nav-items.ts";

export function Nav({ route }: { route: string }) {
  return (
    <nav class="sticky top-0 z-20 bg-white header-nav-shadow">
      <ul class="hidden lg:grid grid-cols-5 max-w-fullhd mx-auto">
        {navItems.map((item) => (
          <li
            class={`text-3xl text-dark-blue grid grid-cols-1 grid-rows-1 place-content-center h-[70px] relative whitespace-nowrap lowercase after::absolute after::right-0 after::top-2 after::bottom-2 after::border-r-2 after::border-[#C4C4C4]`}
          >
            <a
              href={item.link}
              class={`!grid place-content-center px-4 nav-item-link ${route === item.link && "gradient-text"}`}
              // [
              //   ,
              //   route === item.link ? "gradient-text" : undefined,
              // ]
              //   .filter(Boolean)
              //   .join(" ")}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
