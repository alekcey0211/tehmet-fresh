import { getPublicLifePhotos } from "../../../data/public-life-photos.ts";
import PublicLifeMedia from "../../../islands/PublicLifeMedia.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const PublicLife = () => {
  const items = getPublicLifePhotos();
  return (
    <section class="py-4 md:py-6 px-4 sm:px-10">
      <div class="max-w-fullhd mx-auto bg-light-blue p-4 md:p-10">
        <h1 class="text-lg sm:text-4xl text-blue1 font-light text-center mb-4 md:mb-10">
          Организация общественной жизни и корпоративной культуры “ТЕХМЕТ”
        </h1>
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 xl:auto-rows-[291px] 2xl:auto-rows-[391px] gap-6">
          {items.map((item) => (
            <Image
              {...{
                src: item.src,
                alt: item.alt,
                imgClassName: "w-full h-full object-cover",
                className: `${item.cols === 2 && "xl:col-span-2"} ${
                  item.rows === 2 && "xl:row-span-2"
                }`,
              }}
            />
          ))}
        </div>
      </div>
      <PublicLifeMedia />
      <div class="relative max-w-fullhd mx-auto mt-8 md:mt-16 flex justify-end">
        <icons.TitleSeparator />
      </div>
    </section>
  );
};
