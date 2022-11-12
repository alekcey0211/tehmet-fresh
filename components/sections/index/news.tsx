import TopNewSlider from "../../../islands/TopNewSlider.tsx";
import { icons } from "../../icons.tsx";

export const News = () => {
  return (
    <section class="pt-4 sm:pt-8 lg:pt-20 mb-4 sm:mb-8 lg:mb-20 bg-light-blue sm:bg-transparent">
      <div class="relative mb-2 lg:mb-16 max-w-fullhd mx-auto">
        <div class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase mb-4 lg:mb-0">
          Новости техмет
        </div>
        <div class="hidden lg:block absolute bottom-0 right-0">
          <icons.TitleSeparator />
        </div>
      </div>
      <div class="px-4 lg:px-10">
        <div class="max-w-fullhd mx-auto">
          <TopNewSlider />
        </div>
      </div>
      <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
        <icons.TitleSeparator />
      </div>
    </section>
  );
};
