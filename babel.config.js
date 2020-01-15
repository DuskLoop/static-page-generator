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
  ['@babel/preset-typescript'],
];

const plugins = [
  [
    'transform-inline-environment-variables',
    {
      include: ['NODE_ENV'],
    },
  ],
];

module.exports = { presets, plugins };
