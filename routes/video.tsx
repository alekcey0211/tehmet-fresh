import { PageProps } from "$fresh/server.ts";
import { PageData } from "../context/page-context.tsx";
import { LayoutCompact } from "../components/layout.tsx";
import { VideoTitle } from "../components/sections/video/video.tsx";
import { VideoList } from "../components/sections/video/video-list.tsx";

type Data = PageData;

export default function VideoRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="Видео">
      <VideoTitle />
      <VideoList />
    </LayoutCompact>
  );
}
