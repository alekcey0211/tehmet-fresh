module.exports = {
  apps: [
    {
      name: "tehmet",
      script: "./main.ts",
      interpreter: "/root/.deno/bin/deno",
      interpreter_args: "run -A --unstable",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["db"],
    },
  ],
};
