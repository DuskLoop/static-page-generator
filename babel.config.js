const presets = [
  [
    "@babel/env",
    {
      targets: {
        node: "11",
      },
      modules: "commonjs",
    },
  ],
  ["@babel/preset-react"],
  ["@babel/preset-typescript"],
];

module.exports = { presets };
