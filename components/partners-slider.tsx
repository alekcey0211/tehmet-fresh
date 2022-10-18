import { getPartners } from "../data/partners.ts";
import { Image } from "./image.tsx";

export const PartnersSlider = () => {
  return (
    <div class="flex items-center gap-2 select-none">
      <div
        id="swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-prev"
        class="swiper-button-prev text-grey !left-0 shrink-0 !relative !after::text-base !after::sm:text-2xl !after::md:text-4xl !mt-0 !w-auto"
      ></div>
      <div
        id="swiper-71e5983e0ce24d2aa0a941ba82f4c3f3"
        class="swiper w-full max-w-[1167px] 2xl:max-w-none mx-auto"
      >
        <div class="swiper-wrapper items-center">
          {getPartners().map((partner) => (
            <div class="swiper-slide">
              <div class="h-full w-full grid place-content-center">
                <Image {...partner} imgClassName="block max-w-full w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-next"
        class="swiper-button-next text-grey !right-0 shrink-0 !relative !after::text-base !after::sm:text-2xl !after::md:text-4xl !mt-0 !w-auto"
      ></div>
    </div>
  );
};
