import { useState } from "preact/hooks";
import { Image } from "../components/image.tsx";
import { Pagination } from "../components/pagination.tsx";
import { News } from "../routes/data/news.ts";
import { Spin } from "./spin.tsx";

const NewsItem = ({
  id,
  videoId,
  title,
  fileName,
  description,
  date,
  dateString,
}: News) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((v) => !v);
  };
  return (
    <div
      id={id}
      class={`grid gap-4 md:gap-8 py-4 md:py-14 px-4 md:px-8 xl:px-10 bg-light-blue scroll-m-[64px] ${
        !isOpen &&
        "lg:grid-cols-[350px_1fr] xl:grid-cols-[506px_1fr] 2xl:grid-cols-[650px_1fr]"
      }`}
    >
      {videoId ? (
        <lite-youtube
          videoid={videoId}
          autoload
          style="background-image: url('https://i.ytimg.com/vi/{{item.videoId}}/hqdefault.jpg'); background-position: center; background-repeat: no-repeat;"
        ></lite-youtube>
      ) : fileName ? (
        <button onClick={toggle} class="grid items-start justify-center">
          <Image
            {...{
              src: "/img/news/" + fileName,
              alt: title,
              imgClassName:
                "block max-w-full min-w-[350px] xl:min-w-[506px] object-contain object-top",
              aspect: "4/3",
            }}
          />
        </button>
      ) : null}
      <div class="grid grid-rows-[auto_1fr_auto]">
        <button
          onClick={toggle}
          class="text-left mb-4 sm:mb-10 text-blue1 hover:text-blue text-xl sm:text-[28px] uppercase underline"
        >
          {title}
        </button>
        <p
          class="text-dark-blue font-light text-base sm:text-[24px] sm:leading-[40px] mb-4 sm:mb-10"
          {...(isOpen && {
            style:
              "display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;",
          })}
        >
          {description}
        </p>
        <div class="flex justify-between items-center">
          <time dateTime={date} class="text-blue1 text-lg sm:text-2xl">
            {dateString}
          </time>
          <button
            onClick={toggle}
            class="underline text-blue1 text-lg sm:text-2xl"
          >
            {isOpen ? "свернуть" : "подробнее"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const NewsListComponent = ({
  page,
  pages,
  news,
  isLoading,
}: {
  page?: number;
  pages?: number;
  news: News[];
  isLoading?: boolean;
}) => {
  return (
    <section
      id="news"
      class="py-4 md:py-10 max-w-fullhd mx-auto scroll-m-[56px] lg:scroll-m-[64px]"
    >
      {page && pages && (
        <div class="flex justify-end px-4 md:px-8">
          <Pagination
            page={page}
            pages={pages}
            link={(p) => `/blog?page=${p}#news`}
          />
        </div>
      )}
      <div class="grid gap-4 md:gap-10 my-4 md:my-10">
        {isLoading ? <Spin /> : news.map((item) => <NewsItem {...item} />)}
      </div>
      {page && pages && (
        <div class="flex justify-end px-4 md:px-8">
          <Pagination
            page={page}
            pages={pages}
            link={(p) => `/blog?page=${p}#news`}
          />
        </div>
      )}
    </section>
  );
};
