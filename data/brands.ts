export type Brand = {
  id: string;
  name: string;
  url: string;
};

export const fetchBrands = async () => {
  const url = new URL("https://tehmet.su/ajax/brands.php");
  const response = await fetch(url.toString());
  const json = await response.json();
  return Object.values(json.data ?? {}) as Brand[];
};
