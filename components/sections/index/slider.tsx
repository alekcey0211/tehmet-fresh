import { contacts } from "../../../shared/contacts.ts";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Slider = () => {
  return (
    <section class="relative max-w-fullhd h-[237px] sm:h-[600px] md:h-[700px] lg:h-[971px] mx-auto">
      <div
        id="swiper-47b71397b2cc4df69b420a003b5477aa"
        class="swiper w-full h-full"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="grid h-full grid-rows-1">
              <Image
                {...{
                  src: "/img/content/48c0807cee105ec88fdd0523257ba439.jpg",
                  alt: "drawing of a factory with fire from a pipe",
                  className: "col-span-full row-span-full",
                  imgClassName: "object-cover block w-full h-full",
                }}
              />
              <div class="col-span-full row-span-full justify-self-end pr-3 sm:pr-8 lg:pr-[40px] pt-3 lg:pt-[60px] text-right lg:text-left">
                <span class="text-6xl sm:text-[100px] lg:text-[250px] leading-none gradient-text">
                  13
                </span>
                <span class="text-4xl sm:text-[70px] lg:text-[120px] leading-none gradient-text">
                  лет
                </span>
                <span class="block text-2xs sm:text-[20px] lg:text-[28px] leading-none text-blue1 text-right lg:text-center sm:pl-[120px]">
                  БЕСПЕРЕБОЙНОГО СНАБЖЕНИЯ СВАРОЧНЫМИ
                  <br />
                  МАТЕРИАЛАМИ И ОБОРУДОВАНИЕМ
                </span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="grid h-full grid-rows-1">
              <Image
                {...{
                  src: "/img/content/60e6d525211a4371af72f2958c36c030.jpg",
                  alt: "drawing of a factory with fire from a pipe",
                  className: "col-span-full row-span-full",
                  imgClassName: "object-cover block w-full h-full",
                }}
              />
              <div class="col-span-full row-span-full lg:pl-[140px] pt-3 sm:pr-8 lg:pr-0 text-right lg:text-left mx-auto sm:mx-0">
                <span class="text-4xl lg:text-[70px] leading-none gradient-text">
                  более
                </span>
                <span class="text-5xl sm:text-[100px] lg:text-[200px] leading-none xl:leading-[200px] gradient-text whitespace-nowrap">
                  7 000
                </span>
                <span class="block text-2xs sm:text-[28px] leading-none text-blue1">
                  позиций реализованной продукции
                </span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="grid h-[237px] sm:h-[600px] md:h-[700px] lg:h-[971px]">
              <div class="pl-4 xl:pl-[212px] lg:pt-[60px] pr-4 sm:pr-8 lg:pr-0 mb-3 lg:mb-0 mt-3 mx-auto">
                <span class="text-2xl sm:text-[40px] lg:text-[50px] xl:text-[70px] leading-none gradient-text">
                  более&nbsp;
                </span>
                <span class="text-4xl sm:text-[70px] lg:text-[90px] xl:text-[150px] leading-none gradient-text whitespace-nowrap">
                  1 000 000&nbsp;
                </span>
                <span class="text-2xl lg:text-[60px] xl:text-[80px] leading-none gradient-text">
                  км
                </span>
                <span class="block text-2xs sm:text-[20px] lg:text-[28px] leading-none text-blue lg:mt-5">
                  пути доставленного товара. По всей России.
                </span>
              </div>
              <div class="h-[150px] sm:h-[280px] lg:h-auto flex justify-center">
                <Image
                  {...{
                    src: "/img/content/97b3dba279a54f2ca28326d274e021eb.jpg",
                    alt: "a map showing the offices and the geography of sales",
                    imgClassName: "block object-contain h-full max-w-full",
                  }}
                />
              </div>
              <div class="hidden sm:grid grid-cols-[200px_200px_200px] lg:grid-cols-[296px_296px_296px] justify-center mb-4">
                {contacts({ isPage: true }).map((item) => (
                  <div class="aspect-[1.33333/1] relative grid place-content-center gap-2 a768e8baa19f64e51ad0012c672be3e95">
                    <div
                      class="a768e8baa19f64e51ad0012c672be3e95-bg hidden absolute inset-0 -z-10 bg-light-blue"
                      style="clip-path: url(#form-01)"
                    ></div>
                    <div class="flex items-center gap-2">
                      <icons.LocationGradient />
                      <span class="text-xl lg:text-[28px] gradient-text">
                        {item.city}
                      </span>
                    </div>
                    <a
                      class="text-lg lg:text-[22px] gradient-text whitespace-nowrap"
                      href={item.telLink}
                    >
                      {item.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="swiper-47b71397b2cc4df69b420a003b5477aa-button-next"
          class="swiper-button-next text-grey md:!right-10 lg:!right-20 after::text-base after::sm:text-4xl font-extrabold"
        ></div>
        <div
          id="swiper-47b71397b2cc4df69b420a003b5477aa-button-prev"
          class="swiper-button-prev text-grey md:!left-10 lg:!left-20 after::text-base after::sm:text-4xl font-extrabold"
        ></div>
      </div>
    </section>
  );
};
