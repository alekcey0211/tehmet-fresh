#!/usr/bin/env -S deno run -A --watch=static/,routes/

// import * as esbuild from "https://deno.land/x/esbuild@v0.15.8/mod.js";
import dev from "$fresh/dev.ts";

await dev(import.meta.url, "./main.ts");

// const ts = "let test: boolean = true";
// const result = await esbuild.transform(ts, { loader: "ts" });
// await esbuild.build({
//   entryPoints: ["./src/script.js"],
//   outfile: "./static/scripts1.js",
//   minify: true,
//   target: "es2018",
//   bundle: true,
//   watch: true
// });
// // console.log("result:", result);
// esbuild.stop();
