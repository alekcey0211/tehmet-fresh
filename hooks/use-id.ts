import {
  useEffect,
  useRef,
  useState,
  useMemo,
} from "preact/hooks";

const defaultContext = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0,
};

function useSafeId(defaultId?: string): string {
  const ctx = defaultContext;

  return useMemo(
    () => defaultId || `id-${ctx.prefix}-${++ctx.current}`,
    [defaultId]
  );
}

export function useId(defaultId?: string): string {
  const [value, setValue] = useState(defaultId);
  const nextId = useRef<string | null>(null);

  const res = useSafeId(value);

  useEffect(() => {
    const newId = nextId.current;
    if (newId) {
      nextId.current = null;
      setValue(newId);
    }
  }, []);

  return res;
}
