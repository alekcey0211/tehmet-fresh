const cacheExists = new Map<string, { webp: boolean; avif: boolean }>();

const getBaseFormat = (src: string) => (src.endsWith("png") ? "png" : "jpeg");
const exists = (file: string) => {
  try {
    Deno.readFileSync(file);
    return true;
  } catch (error) {
    return false;
  }
};

export function Image({
  src,
  alt = "",
  baseFormat: baseFormatDefault,
  isLazy = true,
  className,
  imgClassName,
  showBreakpoint,
}: {
  src: string;
  alt?: string;
  baseFormat?: string;
  className?: string;
  imgClassName?: string;
  isLazy?: boolean;
  aspect?: "square" | "video" | "4/3";
  showBreakpoint?: string;
}) {
  const baseFormat = baseFormatDefault ? baseFormatDefault : getBaseFormat(src);
  const showBreakpointWidth = showBreakpoint
    ? { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }[showBreakpoint]
    : undefined;

  const webp = src.replace(`.${baseFormat}`, ".webp");
  const avif = src.replace(`.${baseFormat}`, ".avif");

  if (!cacheExists.has(src)) {
    cacheExists.set(src, {
      webp: exists(`./static${webp}`),
      avif: exists(`./static${avif}`),
    });
  }

  return (
    <picture class={className}>
      {showBreakpointWidth && (
        <source
          media={`(max-width: ${showBreakpointWidth}px)`}
          sizes="1px"
          srcset="/blank.gif 1w"
        />
      )}
      {cacheExists.get(src)?.avif && (
        <source
          type="image/avif"
          srcset={avif}
          {...(showBreakpointWidth && {
            media: `(min-width: ${showBreakpointWidth}px)`,
          })}
        />
      )}
      {cacheExists.get(src)?.webp && (
        <source
          type="image/webp"
          srcset={webp}
          {...(showBreakpointWidth && {
            media: `(min-width: ${showBreakpointWidth}px)`,
          })}
        />
      )}
      <source
        type={baseFormat === "jpg" ? "image/jpeg" : `image/${baseFormat}`}
        srcset={src}
        {...(showBreakpointWidth && {
          media: `(min-width: ${showBreakpointWidth}px)`,
        })}
      />
      <img
        src={src}
        alt={alt}
        class={imgClassName}
        {...(isLazy && {
          loading: "lazy",
          decoding: "async",
        })}
      />
    </picture>
  );
}
