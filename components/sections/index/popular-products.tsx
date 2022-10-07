import PopularProductsSlider from "../../../islands/PopularProductsSlider.tsx";

export const PopularProducts = () => {
  return (
    <section class="py-4 md:py-10 lg:px-4">
      <div class="max-w-fullhd mx-auto px-3 md:px-8">
        <h2 class="text-right text-dark-blue text-lg sm:text-4xl md:text-5xl font-light mb-4 md:mb-10 uppercase">
          Популярные товары
        </h2>
        <PopularProductsSlider />
      </div>
    </section>
  );
};
