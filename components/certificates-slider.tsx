import { getCertificates } from "../data/certificates.ts";
import { Image } from "./image.tsx";

export const CertificatesSlider = () => {
  return (
    <>
      <div class="flex items-center gap-3 select-none">
        <div
          id="swiper-aef69157f3874b3d8911be4c51d5741b-button-prev"
          class="swiper-button-prev text-grey !left-0 shrink-0 !relative after::text-base after::sm:text-2xl after::md:text-4xl !mt-0 !w-auto"
        ></div>
        <div
          id="swiper-aef69157f3874b3d8911be4c51d5741b"
          class="swiper w-full max-w-[1167px] 2xl:max-w-none h-[100px] sm:h-[200px] 2xl:h-[300px] mx-auto"
        >
          <div class="swiper-wrapper">
            {getCertificates().map((certificate, index) => (
              <div
                class="swiper-slide"
                data-gallery-item-id={`gallery-89fcf8b9d9ab43948151a207a5eba144-item-${index}`}
              >
                <div class="h-full w-full grid place-content-center relative">
                  <Image
                    {...{
                      src: certificate.view.jpg,
                      alt: certificate.alt,
                      imgClassName: "block swiper-lazy max-w-full w-full",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="swiper-aef69157f3874b3d8911be4c51d5741b-button-next"
          class="swiper-button-next text-grey !right-0 shrink-0 !relative after::text-base after::sm:text-2xl after::md:text-4xl !mt-0 !w-auto"
        ></div>
      </div>
      <div class="pswp-gallery" id="gallery-89fcf8b9d9ab43948151a207a5eba144">
        {getCertificates().map((certificate, index) => (
          <a
            id={`gallery-89fcf8b9d9ab43948151a207a5eba144-item-${index}`}
            href={certificate.src}
            {...{
              "data-pswp-width": certificate.width,
              "data-pswp-height": certificate.height,
            }}
            target="_blank"
            tabIndex={-1}
          >
            <span class="sr-only">{certificate.alt}</span>
          </a>
        ))}
      </div>
    </>
  );
};
