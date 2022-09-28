export function Button({
  text,
  href,
  view,
  dialogId,
  onClick,
}: {
  text?: string;
  href?: string;
  view: "gradient" | "white" | "blue";
  dialogId?: string;
  onClick?: () => void;
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
      class={[buttonClass, textClass, borderColorClass, hoverClass]
        .filter(Boolean)
        .join(" ")}
      {...(href && {
        href,
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
