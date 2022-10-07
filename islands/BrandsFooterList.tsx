import { useState, useEffect } from "preact/hooks";
import { Spin } from "../components/spin.tsx";
import { Brand, fetchBrands } from "../data/brands.ts";

export default function BrandsFooterList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Brand[]>([]);

  useEffect(() => {
    fetchBrands().then((brands) => {
      setData(brands);
      setIsLoading(false);
    });
  }, []);

  return (
    <ul class="grid gap-1 sm:gap-2 text-[10px] sm:text-[18px] font-light text-dark-blue">
      {isLoading ? (
        <Spin />
      ) : (
        <>
          {data.map((brand) => (
            <li class="whitespace-nowrap">
              <a href={`/brands/${brand.url}`}>{brand.name}</a>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
