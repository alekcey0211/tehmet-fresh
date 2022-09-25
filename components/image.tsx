const getBaseFormat = (src: string) => (src.endsWith("png") ? "png" : "jpeg");

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

  return (
    <picture class={className}>
      {showBreakpointWidth && (
        <source
          media={`(max-width: ${showBreakpointWidth}px)`}
          sizes="1px"
          srcset="/assets/img/blank.gif 1w"
        />
      )}
      <source
        type="image/avif"
        srcset={src.replace(`.${baseFormat}`, ".avif")}
        sizes="100vw"
        {...(showBreakpointWidth && {
          media: `(min-width: ${showBreakpointWidth}px)`,
        })}
      />
      <source
        type="image/webp"
        srcset={src.replace(`.${baseFormat}`, ".webp")}
        sizes="100vw"
        {...(showBreakpointWidth && {
          media: `(min-width: ${showBreakpointWidth}px)`,
        })}
      />
      <source
        type={baseFormat === "jpg" ? "image/jpeg" : `image/${baseFormat}`}
        srcset={src}
        sizes="100vw"
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
