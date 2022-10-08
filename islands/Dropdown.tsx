import { icons } from "../components/icons.tsx";
import { Dropdown as DropdownComponent } from "../components/dropdown.tsx";

export default function Dropdown() {
  return (
    <DropdownComponent
      trigger={
        <>
          <span class="text-base sm:text-3xl sm:leading-[50px] font-light gradient-text">
            Детский клуб “Витязь”
          </span>
          <div class="shrink-0 w-4 sm:w-8">
            <icons.TriangleRightGradient />
          </div>
        </>
      }
      triggerClassName="w-full border-b-2 border-grey md:pr-10 flex gap-4 md:gap-10 items-center justify-between text-left py-2 sm:py-4"
      panel={
        <p class="font-light text-base sm:text-3xl sm:leading-[50px] mb-8">
          Детский клуб витязь
        </p>
      }
      panelClassName="absolute bottom-0 left-0 translate-y-full min-w-full overflow-hidden p-4 md:py-12 md:px-16 bg-white border-blue1 border-b-2 border-r-2 border-l-2"
    />
  );
}
