import { useState, useEffect } from "preact/hooks";
import { Image } from "../components/image.tsx";
import { Spin } from "../components/spin.tsx";
import { fetchNews, News } from "../data/news.ts";
import { screens } from "../shared/screens.ts";
import { substring } from "../shared/string.ts";
import Swiper from "../static/swiper/swiper-bundle.esm.browser.min.js";

const Slider = ({ data }: { data: News[] }) => {
  useEffect(() => {
    new Swiper("#swiper-67233994a168456eb9db9ba8c425f2b5", {
      spaceBetween: 50,
      slidesPerView: 1,
      breakpoints: {
        [screens.sm]: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        [screens.lg]: {
          slidesPerView: 3,
        },
      },
      loop: true,
      navigation: {
        nextEl: "#swiper-67233994a168456eb9db9ba8c425f2b5-button-next",
        prevEl: "#swiper-67233994a168456eb9db9ba8c425f2b5-button-prev",
      },
    });
  }, []);
  return (
    <div class="swiper-wrapper">
      {data.map((item) => (
        <div class="swiper-slide">
          <div class="grid grid-rows-[243px_auto_1fr_auto] md:grid-rows-[327px_auto_1fr_auto] 2xl:grid-rows-[500px_auto_1fr_auto] h-full">
            <a
              href="/blog/#{{item.id}}"
              class="mb-3 md:mb-7 bg-light-grey shadow-md"
            >
              <Image
                src={`/img/news/${item.fileName}`}
                alt={item.title}
                imgClassName="block w-full h-full object-cover"
              />
            </a>
            <a
              href="/blog/#{{item.id}}"
              class="mb-1 md:mb-4 text-blue1 hover:text-blue text-base md:text-lg uppercase"
            >
              {item.title}
            </a>
            <p class="text-dark-blue font-light text-sm md:text-lg mb-3 md:mb-5 overflow-hidden overflow-ellipsis">
              {substring(item.description, 140)}
            </p>
            <div class="flex justify-between items-center">
              <time
                dateTime={item.date}
                class="text-dark-blue font-light text-sm md:text-base"
              >
                {item.dateString}
              </time>
              <a
                href="/blog"
                class="underline text-blue1 hover:text-blue uppercase font-light text-xs md:text-sm"
              >
                ЧИТАТЬ ВСЕ НОВОСТИ
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function TopNewSlider() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<News[]>([]);

  useEffect(() => {
    fetchNews().then((news) => {
      setData(news.slice(0, 3));
      setIsLoading(false);
    });
  }, []);

  return (
    <div class="flex items-center gap-2 sm:gap-4 md:gap-8 select-none">
      <div
        id="swiper-67233994a168456eb9db9ba8c425f2b5-button-prev"
        class="swiper-button-prev text-grey !left-0 shrink-0 !relative after::text-base after::sm:text-2xl after::md:text-4xl !mt-0 !w-auto !lg:hidden"
      ></div>
      <div
        id="swiper-67233994a168456eb9db9ba8c425f2b5"
        class="swiper h-[400px] sm:h-[450px] md:h-[550px] 2xl:h-[700px]"
      >
        {isLoading ? <Spin /> : <Slider data={data} />}
      </div>
      <div
        id="swiper-67233994a168456eb9db9ba8c425f2b5-button-next"
        class="swiper-button-next text-grey !right-0 shrink-0 !relative after::text-base after::sm:text-2xl after::md:text-4xl !mt-0 !w-auto !lg:hidden"
      ></div>
    </div>
  );
}
