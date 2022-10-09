import { useRef, useState } from "preact/hooks";
import { icons } from "../components/icons.tsx";
import { useId } from "../hooks/use-id.ts";

export default function PublicLifeMedia() {
  const id = useId();

  const [isPlay, setIsPlay] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);

  const played = isPlay;

  const toggle = () => {
    if (!audio.current) return;

    setIsPlay((v) => !v);

    if (played) {
      audio.current.pause();
      audio.current.currentTime = 0;
    } else {
      audio.current.play();
    }
  };

  return (
    <div class="max-w-fullhd mx-auto flex flex-wrap justify-start gap-2 md:gap-6 py-4 md:py-6">
      <button
        type="button"
        class="pr-4 md:px-4 grid grid-cols-[auto_1fr] items-center gap-2 grid-rows-[48px] md:grid-rows-[64px] rounded-lg border-2 border-[#0089cc]"
        onClick={toggle}
      >
        <svg width="70" height="66" viewBox="0 0 70 66" fill="none">
          <path
            d="M42.61 13.62c-.28-2.12-2.99-3.11-4.76-1.74L23.21 23.2c-.26.2-.6.31-.93.31H10.94c-2.02 0-3.65 1.52-3.65 3.39v12.18c0 1.87 1.63 3.39 3.65 3.39h11.34c.34 0 .67.11.93.31l14.64 11.33c1.77 1.37 4.48.38 4.76-1.74l.28-2.08a129.6 129.6 0 0 0 0-34.6l-.28-2.08Z"
            fill={`url(#a-${id})`}
          />
          {played && (
            <path
              d="M58.07 16.6a2.23 2.23 0 0 1 2.76 1.3 44.91 44.91 0 0 1 0 30.2 2.23 2.23 0 0 1-2.76 1.3c-1.15-.36-1.77-1.5-1.4-2.57a41.11 41.11 0 0 0 0-27.66c-.37-1.07.25-2.21 1.4-2.57Z"
              fill={`url(#b-${id})`}
            />
          )}
          <path
            d="M52.6 22.02a2.24 2.24 0 0 0-2.81-1.2c-1.14.39-1.72 1.55-1.3 2.6a25.94 25.94 0 0 1 0 19.15c-.42 1.06.16 2.22 1.3 2.61 1.13.39 2.39-.15 2.8-1.2A30.16 30.16 0 0 0 54.7 33c0-3.85-.74-7.55-2.1-10.98Z"
            fill={`url(#c-${id})`}
          />
          <defs>
            <linearGradient
              id={`a-${id}`}
              x1="29.92"
              y1="54.37"
              x2="47.38"
              y2="54.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0089CC" />
              <stop offset="1" stop-color="#0A529A" stop-opacity=".96" />
            </linearGradient>
            <linearGradient
              id={`b-${id}`}
              x1="29.92"
              y1="54.37"
              x2="47.38"
              y2="54.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0089CC" />
              <stop offset="1" stop-color="#0A529A" stop-opacity=".96" />
            </linearGradient>
            <linearGradient
              id={`c-${id}`}
              x1="29.92"
              y1="54.37"
              x2="47.38"
              y2="54.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0089CC" />
              <stop offset="1" stop-color="#0A529A" stop-opacity=".96" />
            </linearGradient>
          </defs>
        </svg>
        <span class="text-blue1 text-lg md:text-2xl font-medium">
          Реклама на радио
        </span>
      </button>
      <a
        href="/video"
        class="pr-4 md:px-4 grid grid-cols-[auto_1fr] items-center gap-2 grid-rows-[48px] md:grid-rows-[64px] rounded-lg border-2 border-[#0089cc]"
      >
        <icons.Youtube />
        <span class="text-blue1 text-lg md:text-2xl font-medium">
          Корпоративное видео
        </span>
      </a>
      <audio ref={audio}>
        <source src="/files/tehmet.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
