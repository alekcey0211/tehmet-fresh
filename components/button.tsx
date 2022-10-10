import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button({
  text,
  href,
  target,
  view,
  dialogId,
  onClick,
  className,
}: {
  text?: string;
  href?: string;
  target?: string;
  view: "gradient" | "white" | "blue";
  dialogId?: string;
  onClick?: () => void;
  className?: string;
}) {
  const Tag = href ? "a" : "button";

  const buttonClass =
    "grid place-content-center py-1 sm:py-2 px-3 sm:px-4 border-2 rounded-md sm:rounded-lg select-none";
  const hoverClass =
    view === "gradient" || view === "white" ? "hover-gradient" : "";
  const borderColorClass =
    view === "gradient" || view === "blue"
      ? "border-[#0089cc]"
      : "border-white";
  const textClass = "text-xs sm:text-[22px] leading-none font-medium";

  return (
    <Tag
      id="asdasd"
      class={[buttonClass, textClass, borderColorClass, hoverClass, className]
        .filter(Boolean)
        .join(" ")}
      {...(href && {
        href,
        target,
      })}
      {...(dialogId && {
        "data-dialog-for": dialogId,
      })}
      onClick={onClick}
    >
      {view === "gradient" ? (
        <span class={[textClass, "gradient-text"].filter(Boolean).join(" ")}>
          {text}
        </span>
      ) : (
        <>{text}</>
      )}
    </Tag>
  );
}
