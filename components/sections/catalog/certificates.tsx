import { getCertificates } from "../../../data/certificates.ts";
import { CertificatesSlider } from "../../certificates-slider.tsx";
import { icons } from "../../icons.tsx";

export const Certificates = () => {
  const certificates = getCertificates();
  return (
    <section class="bg-light-blue pt-10 md:pt-[84px] max-w-fullhd mx-auto px-4 md:px-10 mb-10 md:mb-[84px]">
      <h1 class="text-xl md:text-4xl font-light gradient-text">Сертификаты</h1>
      <p class="text-base md:text-3xl md:leading-[80px] font-light text-blue mb-4 md:mb-10">
        Мы - надежные поставщики оборудования для нефтегазовых компаний
      </p>
      <CertificatesSlider certificates={certificates} />
      <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
        <icons.TitleSeparator />
      </div>
    </section>
  );
};
