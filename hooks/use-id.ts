import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
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

const idsUpdaterMap: Map<string, (v: string) => void> = new Map();

/**
 * If a default is not provided, generate an id.
 * @param defaultId - Default component id.
 */
export function useId(defaultId?: string): string {
  const [value, setValue] = useState(defaultId);
  const nextId = useRef<string | null>(null);

  const res = useSafeId(value);

  const updateValue = useCallback((val: string) => {
    nextId.current = val;
  }, []);

  idsUpdaterMap.set(res, updateValue);

  useLayoutEffect(() => {
    const r = res;
    return () => {
      idsUpdaterMap.delete(r);
    };
  }, [res]);

  // This cannot cause an infinite loop because the ref is updated first.
  // eslint-disable-next-line
  useEffect(() => {
    const newId = nextId.current;
    if (newId) {
      nextId.current = null;
      setValue(newId);
    }
  });

  return res;
}
