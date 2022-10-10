import { createRef, JSX } from "preact";
import { useId, useState } from "preact/hooks";

export function Dropdown({
  containerTag: ContainerTag = "div",
  containerClassName,
  trigger,
  triggerClassName,
  panel,
  panelClassName,
}: {
  containerTag?: "div" | "li";
  containerClassName?: string;
  trigger: JSX.Element;
  triggerClassName: string;
  panel: JSX.Element;
  panelClassName: string;
}) {
  const id = useId();

  const [isOpen, setIsOpen] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const triggerProps = {
    ref: btnDropdownRef,
    onClick: () => {
      isOpen ? close() : open();
    },
    "aria-expanded": isOpen,
    "aria-controls": id,
  };

  const panelProps = { ref: popoverDropdownRef, id };

  return (
    <ContainerTag class={containerClassName ?? "relative"}>
      <button {...triggerProps} type="button" className={triggerClassName}>
        {trigger}
      </button>
      {isOpen && (
        <div {...panelProps} className={panelClassName}>
          {panel}
        </div>
      )}
    </ContainerTag>
  );
}
