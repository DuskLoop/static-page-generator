const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: '11',
      },
      modules: 'commonjs',
    },
  ],
  ['@babel/preset-react'],
];

module.exports = { presets };
