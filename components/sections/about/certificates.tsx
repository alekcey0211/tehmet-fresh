import { getCertificates } from "../../../data/certificates.ts";
import { CertificatesSlider } from "../../certificates-slider.tsx";

export const Certificates = () => {
  const certificates = getCertificates();
  return (
    <section class="p-4 md:p-10">
      <div class="max-w-fullhd mx-auto">
        <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-right text-dark-blue sm:mb-4 md:mb-16">
          СЕРТИФИКАТЫ
        </h1>
        <CertificatesSlider certificates={certificates} />
      </div>
    </section>
  );
};
