const { build } = require("esbuild");

const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  const dev = process.argv.includes("--dev");
  const minify = !dev;

  // const watch = process.argv.includes("--watch");

  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    // watch,
    external,
    ...config,
  };

  // TODO: watch 추가 -> context 만들어서 직접 호출

  Promise.all([
    build({
      ...baseConfig,
      format: "esm",
    }),
    build({
      ...baseConfig,
      format: "cjs",
      outExtension: {
        ".js": ".cjs",
      },
    }),
  ]).catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

module.exports = run;
