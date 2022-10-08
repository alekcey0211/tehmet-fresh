export const Cargo = () => {
  return (
    <section class="py-5 px-4 sm:px-10 bg-light-blue max-w-fullhd mx-auto">
      <h1 class="text-xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] font-light text-right mb-5">
        Грузоперевозки
      </h1>
      <div class="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-10 justify-evenly">
        <div class="grid justify-items-center py-4 px-2 sm:py-10 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <img
            class="h-[100px] sm:h-[141px] mb-2 block"
            src="/img/content/ff3a03d3-9e42-4c9a-b14f-4a756adb1c54.svg"
            alt="black and white truck"
          />
          <span class="font-light text-lg sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Автомобильный транспорт
          </span>
        </div>
        <div class="grid justify-items-center py-4 px-2 sm:py-10 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <img
            class="h-[100px] sm:h-[141px] mb-2 block"
            src="/img/content/5b3898fe-4438-4934-959c-d9a81b7a5021.svg"
            alt="black and white post office"
          />
          <span class="font-light text-lg sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Почтово-багажное отделение
          </span>
        </div>
        <div class="grid justify-items-center py-4 px-2 sm:py-10 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <img
            class="h-[100px] sm:h-[141px] mb-2 block"
            src="/img/content/6354bb0a-6612-4b85-bcd1-09533b11afb9.svg"
            alt="black and white train leaving the tunnel"
          />
          <span class="font-light text-lg sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Ж\Д контейнеры
          </span>
        </div>
        <div class="grid justify-items-center py-4 px-2 sm:py-10 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <img
            class="h-[100px] sm:h-[141px] mb-2 block"
            src="/img/content/072b341b-b284-4470-ab55-fa230d6a2336.svg"
            alt="black and white plane"
          />
          <span class="font-light text-lg sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Авиаперевозка
          </span>
        </div>
      </div>
    </section>
  );
};
