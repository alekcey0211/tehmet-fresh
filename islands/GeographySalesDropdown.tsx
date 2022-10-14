import { icons } from "../components/icons.tsx";
import { Dropdown as DropdownComponent } from "../components/dropdown.tsx";

export default function GeographySalesDropdown({
  containerClassName,
  listClassName,
  cities,
}: {
  containerClassName: string;
  listClassName: string;
  cities: string[];
}) {
  return (
    <DropdownComponent
      containerClassName={containerClassName}
      trigger={
        <>
          <span class="underline text-blue1 text-lg md:text-3xl">
            «Техмет-Урал» обеспечивает дистрибуцию во все регионы&nbsp;России
          </span>
          <div class="shrink-0">
            <icons.DoubleCaretDown />
          </div>
        </>
      }
      triggerClassName="flex gap-3 items-center border-2 border-blue1 rounded-lg p-3 md:border-0"
      panel={
        <>
          <ul class={listClassName}>
            {cities.map((city) => (
              <li>{city}</li>
            ))}
          </ul>
        </>
      }
      panelClassName="overflow-hidden py-4 bg-white shadow-lg!"
    />
  );
}
