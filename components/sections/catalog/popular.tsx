import PopularProductsSlider from "../../../islands/PopularProductsSlider.tsx";

export const Popular = () => {
  return (
    <section class="p-4 md:p-10">
      <div class="max-w-fullhd mx-auto">
        <h1 class="text-blue text-xl md:text-4xl font-light mb-10">
          Популярные товары
        </h1>
        <PopularProductsSlider />
      </div>
    </section>
  );
};
