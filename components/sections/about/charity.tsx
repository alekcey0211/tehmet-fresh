import CharityDropdown from "../../../islands/CharityDropdown.tsx";
import { icons } from "../../icons.tsx";

export const Charity = () => {
  return (
    <section class="bg-light-blue pt-4 sm:pt-10 md:pt-[84px] mb-4 sm:mb-10 md:mb-[84px] max-w-fullhd mx-auto">
      <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-right text-dark-blue mb-1 sm:mb-4 md:mb-24 pr-4 md:pr-10">
        БЛАГОТВОРИТЕЛЬНАЯ ДЕЯТЕЛЬНОСТЬ
      </h1>
      <div class="bg-white p-4 sm:p-8 md:px-10 md:pt-12 md:pb-24 max-w-max">
        <p class="mb-2 md:mb-16 text-lg sm:text-3xl sm:leading-[50px] font-light text-blue1">
          Компания оказывает спонсорскую помощь нескольким организациям
        </p>
        <CharityDropdown
          containerClassName="relative z-30"
          text="УРО РАМФ (Уральское отделение ассоциации мини-футбола России)"
          description={`
		Давно взаимодействуем с УРО РАМФ (Уральское отделение ассоциации
			мини-футбола России) (подробная информация на сайте урорамф.рф). С
			2016 года мы стали организационным партнером. Осенью под маркой
			компании "ТЕХМЕТ" выступила одноименная команда в турнире "Уральские
			звезды". Результат был отличным несмотря на то, что для спортсменов
			эта игра была дебютной.`}
        />
        <CharityDropdown
          containerClassName="relative z-20"
          text="Детский клуб “Витязь”"
          description={`
		Детский клуб витязь`}
        />
        <CharityDropdown
          containerClassName="relative z-10"
          text="Общественная организация “Родители Урала”"
          description={`
		"Родители Урала за мир без преступности, насилия и наркотиков" это
		свердловская региональная общественная организация, которой наша
		компания оказывает финансовую поддержку. Специалисты разрабатывают
		воспитательные просветительские беседы для детей, подростков и
		молодежи. Мы рады, что оказывая посильную поддержку, помогаем нашим
		детям. Ведь вовремя донесенная информация, в дальнейшем может повлиять
		на их будущее.`}
        />
      </div>
      <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
        <icons.titleSeparator />
      </div>
    </section>
  );
};
