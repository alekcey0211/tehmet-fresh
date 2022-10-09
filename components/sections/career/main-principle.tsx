import { vacancies } from "../../../shared/vacancies.ts";

export const MainPrinciple = () => {
  return (
    <section class="py-4 md:py-6 px-4 sm:px-10 ">
      <div class="max-w-fullhd mx-auto">
        <h1 class="text-xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] font-light text-right">
          Главный принцип компании
        </h1>
        <p class="m-0 text-right text-sm sm:text-2xl mb-4 md:mb-6">
          это честность и порядочность к клиентам, сотрудникам и поставщикам
        </p>
        <div class="grid md:grid-cols-[0.4fr_1fr] gap-8 xl:gap-x-24">
          <div class="grid content-start gap-2 md:gap-4 bg-light-grey py-4 lg:py-8 px-4 lg:px-10 rounded-2xl">
            <span class="underline text-blue1 text-lg md:text-2xl">
              Актуальные вакансии
            </span>
            <ul class="grid content-start gap-2 md:gap-4">
              {vacancies()
                .filter(({ isArchive }) => !isArchive)
                .map((vacancy) => (
                  <li>
                    <a
                      href={`/about/career/vacancy/${vacancy.link}`}
                      class="text-blue text-base md:text-xl"
                    >
                      {vacancy.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div class="bg-light-blue py-4 lg:py-10 px-4 lg:px-8 text-blue1 text-base md:text-xl md:leading-[40px] rounded-2xl">
            <span>
              В нашей компании многие сотрудники работают долгое время. Той
              ужасающей «текучки», которая пугает многих работников, у нас нет.
              Можно предположить, что на это влияют: перспективы карьерного
              роста, стабильная и своевременная заработная плата, премии,
              обучение… Но мы решили не гадать, а провести опрос у наших
              сотрудников. Внизу представлены их ответы на вопрос: «Почему они
              работают в компании «ТЕХМЕТ»?»
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
