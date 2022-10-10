import TopNewSlider from "../../../islands/TopNewSlider.tsx";
import { icons } from "../../icons.tsx";

export const TopNews = () => {
  return (
    <section class="pt-4 sm:pt-10">
      <div class="px-4 md:px-8 lg:px-10">
        <div class="max-w-fullhd mx-auto">
          <h2 class="text-right text-blue text-xl sm:text-4xl font-light mb-4 md:mb-10">
            Свежие новости
          </h2>
        </div>
      </div>
      <div class="px-4 md:px-8 lg:px-10">
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
