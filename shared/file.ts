export const getJsonSync = (filePath: string) => {
  try {
    return JSON.parse(Deno.readTextFileSync(filePath));
  } catch (e) {
    console.log(filePath + ": " + e.message);
  }
};

export const getJson = async (filePath: string) => {
  try {
    return JSON.parse(await Deno.readTextFile(filePath));
  } catch (e) {
    console.log(filePath + ": " + e.message);
  }
};
