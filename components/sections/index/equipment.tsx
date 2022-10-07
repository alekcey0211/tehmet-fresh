export const Equipment = () => {
  return (
    <section class="py-4 sm:py-8 lg:py-20 bg-light-blue max-w-fullhd mx-auto">
      <div class="max-w-[1286px] mx-auto px-4 sm:px-8 lg:px-10 grid lg:grid-cols-[547px_1fr] place-content-start gap-y-2 sm:gap-y-4 lg:gap-y-6 gap-x-4">
        <h3 class="lg:col-start-1 text-blue1 font-light text-lg sm:text-[32px] leading-tight sm:leading-[50px] text-right lg:text-left relative lg:-top-[0.3em]">
          КОМЛЕКТАЦИЯ ОБЪЕКТОВ ЛЮБОЙ
          <br />
          СЛОЖНОСТИ ПО ВСЕЙ РОССИИ
        </h3>
        <p class="lg:col-start-1 font-light text-xs sm:text-[22px] leading-loose sm:leading-normal lg:leading-[30px] text-blue1 lg:text-black px-3 py-4 sm:p-8 lg:p-0 bg-white lg:bg-transparent rounded-lg text-center lg:text-left">
          Одно из основных направлений компании - сварочные материалы. Всегда в
          наличии на складе большой ассортимент электродов, омедненной и
          светлой, а также нержавеющей проволоки. Для ведения газосварочных
          работ имеются резаки, редуктора, регуляторы расхода газа, горелки,
          рукава и прочие комплектующие.
        </p>
        <div class="row-start-2 lg:row-start-1 lg:row-end-3 lg:col-start-2 w-full h-full">
          <lite-youtube
            videoid="2cpuHUb45QU"
            autoload
            style="background-image: url('https://i.ytimg.com/vi/2cpuHUb45QU/hqdefault.jpg'); background-position: center; background-repeat: no-repeat;"
          ></lite-youtube>
        </div>
      </div>
    </section>
  );
};
