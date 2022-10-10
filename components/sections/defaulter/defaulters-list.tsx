import { getDefaulter } from "../../../data/defaulter.ts";
import { icons } from "../../icons.tsx";

export const DefaulterList = () => {
  return (
    <section class="max-w-fullhd mx-auto">
      <div class="grid 2xl:grid-cols-2 gap-7 mx-4 md:mx-10">
        {getDefaulter().map((item, index) => (
          <div
            class={`px-4 md:px-10 py-4 md:py-6 grid grid-rows-[auto_1fr] gap-y-2 md:gap-y-6 content-start text-base lg:text-xl lg:leading-[40px] text-dark-blue ${
              (index + 1) % 2 === 0 ? "bg-light-blue" : "bg-light-grey"
            }`}
          >
            <div class="grid md:grid-cols-[180px_1fr_auto] lg:grid-cols-[250px_1fr_auto] gap-y-2 md:gap-y-6 gap-x-2 content-start">
              <span class="text-blue1">Название компании</span>
              <span>{item.companyName}</span>
              <span class="text-blue1 row-start-1 md:row-span-1">
                {item.city}
              </span>
              {item.related.length > 0 && (
                <>
                  <span class="text-blue1">Связанные юр. лица</span>
                  <div class="md:col-span-2 grid gap-1">
                    {item.related.map((rel) => (
                      <span>{rel}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div class="bg-white py-4 px-2 grid content-start md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] 2xl:grid-cols-1">
              <span class="text-blue1">Комментарий</span>
              <span>{item.comment}</span>
            </div>
          </div>
        ))}
      </div>
      <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
        <icons.TitleSeparator />
      </div>
    </section>
  );
};
