import { PartnersSlider } from "../../partners-slider.tsx";

export const Partners = () => {
  return (
    <section class="p-4 md:p-10">
      <div class="max-w-fullhd mx-auto">
        <h1 class="text-xl md:text-4xl font-light gradient-text">
          Наши партнеры
        </h1>
        <p class="text-base md:text-3xl md:leading-[80px] font-light text-blue mb-4 md:mb-10">
          Популярные производители сварочного оборудования в России и мире
        </p>
		<PartnersSlider />
      </div>
    </section>
  );
};
