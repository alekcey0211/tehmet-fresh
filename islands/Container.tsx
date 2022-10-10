import { createRef, JSX, Ref } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ContainerProps {
  start: number;
  str: string;
  rec: Record<string, () => void>;
  func: () => void;
}

export default function Container(props: ContainerProps) {
  return <div>{props.start}</div>;
}
