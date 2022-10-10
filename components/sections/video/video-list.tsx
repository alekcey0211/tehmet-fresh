import { getVideo } from "../../../data/video.ts";
import { icons } from "../../icons.tsx";

export const VideoList = () => {
  return (
    <section class="pb-4 md:pb-16 max-w-fullhd mx-auto">
      <div class="grid xl:grid-cols-2 gap-7 mx-4 md:mx-10">
        {getVideo().map((item) => (
          <div class="grid gap-2">
            <h2 class="text-left text-blue1 text-[28px]">{item.title}</h2>
            <time
              dateTime={item.date}
              class="text-dark-blue font-light text-sm md:text-base"
            >
              {item.dateString}
            </time>
            <lite-youtube
              videoid={item.id}
              autoload
              style="background-image: url('https://i.ytimg.com/vi/{{item.videoId}}/hqdefault.jpg'); background-position: center; background-repeat: no-repeat;"
            ></lite-youtube>
          </div>
        ))}
      </div>
      <div class="mt-4 md:mt-8 lg:mt-20 flex justify-end">
        <div class="hidden lg:block">
          <icons.TitleSeparator />
        </div>
      </div>
    </section>
  );
};
