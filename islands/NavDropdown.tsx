import { Dropdown as DropdownComponent } from "../components/dropdown.tsx";

export default function NavDropdown({
  pathname,
  text,
  link,
  items,
}: {
  pathname: string;
  text: string;
  link: string;
  items: {
    text: string;
    link: string;
  }[];
}) {
  return (
    <DropdownComponent
      containerTag="li"
      containerClassName="text-3xl text-dark-blue grid grid-cols-1 grid-rows-1 place-content-center h-[70px] relative whitespace-nowrap [ after:absolute after:right-0 after:top-2 after:bottom-2 after:border-r-2 after:border-[#C4C4C4] ]"
      trigger={
        <span class={`${pathname.startsWith(link) && "gradient-text"}`}>
          {text}
        </span>
      }
      triggerClassName="grid place-items-center nav-item-button lowercase after::absolute after::right-0 after::top-2 after::bottom-2 after::border-r-2 after::border-[#C4C4C4]"
      panel={
        <ul class="pl-12 py-4 bg-white">
          {items.map(({ text, link: itemLink }, index, { length }) => {
            const isActive = pathname === link + itemLink;
            return (
              <li class="grid items-center text-xl text-grey2 hover:text-dark-blue">
                <a
                  href={link + itemLink}
                  class={`grid items-center h-full pr-4 py-[5px] nav-item-link ${
                    isActive && "gradient-text"
                  }`}
                >
                  {text}
                </a>
                {index < length - 1 && (
                  <div class="border-b-[1px] border-[#DADADA]" />
                )}
              </li>
            );
          })}
        </ul>
      }
      panelClassName="absolute bottom-0 left-0 translate-y-full pt-1 min-w-full shadow-lg!"
    />
  );
}
