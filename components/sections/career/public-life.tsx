import PublicLifeMedia from "../../../islands/PublicLifeMedia.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const PublicLife = () => {
  const items = [
    {
      src: "/img/content/932965b3cdee421c4b0f39180f736e5c.jpg",
      alt: "6 women sitting at the table",
      cols: 2,
      rows: 2,
    },
    {
      src: "/img/content/e759ddc646474cd065e0b4e647fb8dd7.jpg",
      alt: "group of people standing on white floor tiles",
    },
    {
      src: "/img/content/d23441b385528f5f5e0be26f5c7e2981.jpg",
      alt: "group of people taking group picture",
    },
    {
      src: "/img/content/9bec07fddeb6a399ebcd98e9417aa7d8.jpg",
      alt: "3 women wearing mask holding bouquet of flowers",
    },
    {
      src: "/img/content/296b8d8a68c4b054a059b8d019130d0f.jpg",
      alt: "happy birthday cake with candles",
    },
    {
      src: "/img/content/8b3c7bb751d86d4de769e9cf5e30738e.jpg",
      alt: "group of people standing on snow covered ground",
    },
    {
      src: "/img/content/652aa7145356215408e894240ca8c62b.jpg",
      alt: "3 women wearing red and blue dresses",
      cols: 2,
      rows: 2,
    },
    {
      src: "/img/content/b4b0f34ac37b9d97eecfdca27afb1955.jpg",
      alt: "people in green and black racing suit riding blue and black sports bike",
      rows: 2,
    },
  ];
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
