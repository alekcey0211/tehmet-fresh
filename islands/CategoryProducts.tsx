import { useState, useEffect } from "preact/hooks";
import { Spin } from "../components/spin.tsx";
import { fetchProducts, Product } from "../data/products.ts";

export default function CategoryProducts({
  categories,
}: {
  categories: string[];
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts({ categories }).then((products) => {
      setData(products);
      setIsLoading(false);
    });
  }, []);

  return (
    <ul class="list-disc">
      {isLoading ? (
        <Spin />
      ) : (
        <>
          {data.map((product) => (
            <li>
              <a href={`/products/${product.url}`}>{product.name}</a>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
