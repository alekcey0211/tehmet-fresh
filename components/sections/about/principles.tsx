import { Button } from "../../button.tsx";
import { Image } from "../../image.tsx";
import { icons } from "../../icons.tsx";

export const Principles = () => {
  const items = [
    {
      title: "НАДЕЖНОСТЬ",
      html: "Строим все процессы на <br class='hidden 2xl:block' />максимально оперативное и <br class='hidden 2xl:block' />надежное снабжение.",
      src: "/img/content/cfae951b8bdd40ad8b345d3c156c116d.png",
      alt: "Крестик изображенный на щите зеленого цвета",
    },
    {
      title: "КАЧЕСТВО",
      html: "Поставляем только<br/>качественные<br/>материалы.",
      icon: <icons.Award />,
    },
    {
      title: "ПРОЗРАЧНОСТЬ",
      html: `Сторонники экологичного<br/>ведения бизнеса.<br/>Выступаем против обмана<br/>и
						<a href="/about/defaulter" class="gradient-text">неплательщиков</a>.`,
      src: "/img/content/79b581c4689e4c089a2384c5445cb011.png",
      alt: "Зеленый лист в углу с синем зданием на фоне",
    },
  ];
  return (
    <section class="bg-light-blue py-4 sm:py-10 md:py-[64px] max-w-fullhd mx-auto px-4 md:px-10">
      <div class="text-right text-dark-blue text-lg sm:text-4xl md:text-5xl font-light mb-4 md:mb-10 uppercase px-3 md:px-8">
        НАШИ ГЛАВНЫЕ ПРИНЦИПЫ РАБОТЫ
      </div>
      <div class="grid justify-center sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-4 md:mb-16">
        {items.map(({ src, alt, icon, title, html }) => (
          <div class="max-w-[270px] md:max-w-none grid grid-rows-[80px_auto_auto] md:grid-rows-[134px_auto_auto] gap-4 md:gap-7 content-start md:min-h-[563px] bg-white rounded-[20px] py-5 sm:py-9 px-4 sm:px-6">
            {src ? (
              <Image
                {...{
                  src,
                  alt,
                  imgClassName: "mx-auto max-w-full max-h-full object-contain",
                  baseFormat: "png",
                }}
              />
            ) : (
              <div class="mx-auto max-w-full">{icon}</div>
            )}
            <p class="uppercase font-light text-lg sm:text-4xl lg:text-[46px] lg:leading-[80px] text-center gradient-text">
              {title}
            </p>
            <span
              class="font-light text-base sm:text-2xl lg:text-3xl lg:leading-[50px] text-center"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        ))}
      </div>
      <div class="grid place-items-center gap-2 sm:gap-4">
        <div class="grid w-52 md:w-64 h-10 md:h-16 text-white">
          <Button
            view="gradient"
            text="Заказать звонок"
            dialogId="a74b73421fe794532bd3f7cb4f430e750"
          />
        </div>
        <div class="grid place-content-center">
          <div class="border-solid border-blue border-t-[18px] sm:border-t-[26px] border-x-[12px] sm:border-x-[17px] border-transparent border-b-0"></div>
        </div>
      </div>
    </section>
  );
};
