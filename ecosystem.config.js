module.exports = {
  apps: [
    {
      name: "tehmet",
      script: "./main.ts",
      interpreter: "/root/.deno/bin/deno",
      interpreter_args: "run -A --unstable",
    },
  ],
};
