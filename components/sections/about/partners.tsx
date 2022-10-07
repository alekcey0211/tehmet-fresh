import { PartnersSlider } from "../../partners-slider.tsx";

export const Parners = () => {
  return (
    <section class="p-4 md:p-10">
      <div class="max-w-fullhd mx-auto">
        <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-right text-dark-blue md:mb-16">
          НАШИ ПАРТНЕРЫ
        </h1>
        <PartnersSlider />
      </div>
    </section>
  );
};
