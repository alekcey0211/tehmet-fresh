import { useState, useEffect } from "preact/hooks";
import { Spin } from "../components/spin.tsx";
import { fetchPopularProducts } from "../data/popular-products.ts";
import { PopularProductsResponse } from "../routes/data/popular-products.ts";
import { screens } from "../shared/screens.ts";
import Swiper from "../static/swiper/swiper-bundle.esm.browser.min.js";

const Slider = ({ data }: { data: PopularProductsResponse }) => {
  useEffect(() => {
    new Swiper("#swiper-bbaccfb375bf4ed48546783f28c4c46a", {
      slidesPerView: 1,
      breakpoints: {
        [screens["2xs"]]: {
          slidesPerView: Math.min(2, data.length),
        },
        [screens.xs]: {
          slidesPerView: Math.min(3, data.length),
        },
        [screens.lg]: {
          slidesPerView: Math.min(2, data.length),
        },
        [screens.xl]: {
          slidesPerView: Math.min(3, data.length),
        },
        [screens["2xl"]]: {
          slidesPerView: Math.min(4, data.length),
        },
      },
      loop: true,
      navigation: {
        nextEl: "#swiper-bbaccfb375bf4ed48546783f28c4c46a-button-next",
        prevEl: "#swiper-bbaccfb375bf4ed48546783f28c4c46a-button-prev",
      },
    });
  }, []);
  return (
    <div class="swiper-wrapper">
      {data.map((item) => (
        <div class="swiper-slide">
          <div class="swiper-slide__wrapper" style="clip-path: url(#form-01)">
            <div
              class="swiper-slide__wrapper__img-container"
              style="clip-path: url(#form-01)"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                class="object-contain object-center h-full w-full"
              />
            </div>
            <span class="swiper-slide__wrapper__text">{item.name}</span>
            <a
              href={`/products/${item.url}/`}
              class="swiper-slide__wrapper__link"
            ></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function PopularProductsSlider() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PopularProductsResponse>([]);

  useEffect(() => {
    fetchPopularProducts().then((popularProducts) => {
      setData(popularProducts);
      setIsLoading(false);
    });
  }, []);

  return (
    <div class="flex items-center lg:gap-4 select-none">
      <div
        id="swiper-bbaccfb375bf4ed48546783f28c4c46a-button-prev"
        class="swiper-button-prev text-grey !left-0 shrink-0 !relative after::text-base after::md:text-2xl after::lg:text-4xl !mt-0 !w-auto"
      ></div>
      <div
        id="swiper-bbaccfb375bf4ed48546783f28c4c46a"
        class="swiper max-w-[1167px] 2xl:max-w-none h-44 md:h-52 lg:h-80 mx-auto"
      >
        {isLoading ? <Spin /> : <Slider data={data} />}
      </div>
      <div
        id="swiper-bbaccfb375bf4ed48546783f28c4c46a-button-next"
        class="swiper-button-next text-grey !right-0 shrink-0 !relative after::text-base after::md:text-2xl after::lg:text-4xl !mt-0 !w-auto"
      ></div>
    </div>
  );
}
