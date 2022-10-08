import { icons } from "../components/icons.tsx";
import { Dropdown as DropdownComponent } from "../components/dropdown.tsx";
import { cities } from "../shared/cities.ts";

export default function CharityDropdown({
  containerClassName,
  text,
  description,
}: {
  containerClassName: string;
  text: string;
  description: string;
}) {
  return (
    <DropdownComponent
      containerClassName={containerClassName}
      trigger={
        <>
          <span class="text-base sm:text-3xl sm:leading-[50px] font-light gradient-text">
            {text}
          </span>
          <div class="shrink-0 w-4 sm:w-8">
            <icons.TriangleRightGradient />
          </div>
        </>
      }
      triggerClassName="w-full border-b-2 border-grey md:pr-10 flex gap-4 md:gap-10 items-center justify-between text-left py-2 sm:py-4"
      panel={
        <p class="font-light text-base sm:text-3xl sm:leading-[50px] mb-8">
          {description}
        </p>
      }
      panelClassName="absolute bottom-0 left-0 translate-y-full min-w-full overflow-hidden p-4 md:py-12 md:px-16 bg-white border-blue1 border-b-2 border-r-2 border-l-2"
    />
  );
}
