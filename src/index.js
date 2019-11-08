import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import fs from 'fs';
import template from './template';

const body = renderToStaticMarkup(<App data={{ ok: 'lol' }} />);

const markup = template({
  body,
  title: 'Test',
});

fs.writeFile('result/index.html', markup, err => {
  console.log('Done: ', err);
});
