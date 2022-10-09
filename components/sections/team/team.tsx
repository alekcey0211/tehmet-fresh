import { icons } from "../../icons.tsx";

export const TeamTitle = () => {
  return (
    <section class="pt-4 sm:pt-8 lg:pt-16 max-w-fullhd mx-auto">
      <div class="relative">
        <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase sm:mb-4 lg:mb-0">
          НАША КОМАНДА
        </h1>
        <div class="hidden lg:block absolute bottom-0 right-0">
          <icons.TitleSeparator />
        </div>
      </div>
    </section>
  );
};
