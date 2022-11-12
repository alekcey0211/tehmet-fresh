export const DeliveryTime = () => {
  return (
    <section class="py-5 px-4 sm:px-10 pb-12 bg-light-blue max-w-fullhd mx-auto">
      <div class="text-xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] font-light text-right mb-5">
        Сроки доставки
      </div>
      <div class="grid grid-cols-[120px_1fr] sm:grid-cols-[200px_1fr] lg:grid-cols-[310px_1fr] bg-white mb-7">
        <div class="flex items-center justify-center lg:justify-start lg:px-16 py-2 border-r-2 border-blue border-b-2 border-blue">
          <span class="text-lg lg:text-2xl lg:leading-[50px] text-dark-blue">
            1-2 дня
          </span>
        </div>
        <div class="py-2 px-5 border-b-2 border-blue">
          <span class="text-base leading-relaxed lg:text-xl lg:leading-[50px] text-dark-blue">
            по Уральскому региону (Челябинск, Пермь, Тюмень, Курган, Уфа,
            Ижевск, Киров, Оренбург)
          </span>
        </div>
        <div class="flex items-center justify-center lg:justify-start lg:px-16 py-2 border-r-2 border-blue border-b-2 border-blue">
          <span class="text-lg lg:text-2xl lg:leading-[50px] text-dark-blue">
            2-4 дня
          </span>
        </div>
        <div class="py-2 px-5 border-b-2 border-blue">
          <span class="text-base leading-relaxed lg:text-xl lg:leading-[50px] text-dark-blue">
            по Екатеринургу, в регионы Западной Сибири (Тобольск, Пыть-Ях,
            Нефтеюганск, Сургут, Нижневартовск, Мегион, Когалым,Ноябрьск, Пурпе,
            Уренгой, Надым, Югорск, Нягань, Приобье и т.д.)
          </span>
        </div>
        <div class="flex items-center justify-center lg:justify-start lg:px-16 py-2 border-r-2 border-blue border-b-2 border-blue">
          <span class="text-lg lg:text-2xl lg:leading-[50px] text-dark-blue">
            3-5 дней
          </span>
        </div>
        <div class="py-2 px-5 border-b-2 border-blue">
          <span class="text-base leading-relaxed lg:text-xl lg:leading-[50px] text-dark-blue">
            по Санкт-Петербургу, Архангельску, Камчатке, в города
            Восточно-Сибирского региона (Омск, Томск, Новосибирск)
          </span>
        </div>
        <div class="flex items-center justify-center lg:justify-start lg:px-16 py-2 border-r-2 border-blue">
          <span class="text-lg lg:text-2xl lg:leading-[50px] text-dark-blue">
            7-10 дней
          </span>
        </div>
        <div class="py-2 px-5">
          <span class="text-base leading-relaxed lg:text-xl lg:leading-[50px] text-dark-blue">
            в города Восточно-Сибирского региона (Красноярск, Братск, Иркутск,
            Усть-Кут)
          </span>
        </div>
      </div>
      <p class="text-center font-light text-xl sm:text-[28px] sm:leading-[40px] mb-3 text-blue1">
        Во всех случаях осуществляется доставка до склада покупателя!
      </p>
      <p class="text-center text-lg sm:text-[20px] sm:leading-[50px] text-dark-blue">
        Для организаций, использующих собственный грузовой транспорт, действует
        отгрузка со склада в Екатеринбурге.
      </p>
    </section>
  );
};
