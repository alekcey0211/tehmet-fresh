import { banner } from "../../shared/banner.ts";
import { Button } from "../button.tsx";
import { Image } from "../image.tsx";

export const Banner = () => {
  return (
    <>
      <div class="pl-12 max-w-[440px] grid grid-cols-1">
        <div
          id="swiper-9a3e8ea9-7faf-486e-957f-de3a1795479f"
          class="swiper w-full"
        >
          <div class="swiper-wrapper">
            {banner().topSlider.map((item) => (
              <div class="swiper-slide bg-light-grey grid place-content-center">
                <a href="{{item.link}}" class="block">
                  <Image
                    {...{
                      src: item.img,
                      imgClassName: "w-full h-full object-contain",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
          <div
            id="swiper-pagination-9a3e8ea9-7faf-486e-957f-de3a1795479f"
            class="swiper-pagination"
          ></div>
        </div>
      </div>
      <div class="pl-12 max-w-[440px] grid grid-cols-1">
        <div
          id="swiper-bbf7c73f-0433-40a2-945b-8708ba9dfbc4"
          class="swiper w-full"
        >
          <div class="swiper-wrapper">
            {banner().bottomSlider.map((item) => (
              <div class="swiper-slide bg-light-grey grid place-content-center">
                <a href="{{item.link}}" class="block">
                  <Image
                    {...{
                      src: item.img,
                      imgClassName: "w-full h-full object-contain",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
          <div
            id="swiper-pagination-bbf7c73f-0433-40a2-945b-8708ba9dfbc4"
            class="swiper-pagination"
          ></div>
        </div>
      </div>
      {banner().bestPurchase && (
        <div class="grid h-16 grid-rows-1 pl-12 max-w-[440px]">
          <Button
            view="gradient"
            text="Выгодная покупка"
            href={banner().bestPurchase}
          />
        </div>
      )}
    </>
  );
};
