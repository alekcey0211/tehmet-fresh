import { slugify } from "https://deno.land/x/slugify@0.3.0/mod.ts";

export const slugifyString = (str: string) => {
  return slugify(str, {
    replacement: "-",
    remove: /[#,&,+()$~%.'":*?<>{}]/g,
    lower: true,
  });
};
