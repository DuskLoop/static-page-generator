"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  body,
  title
}) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>${title}</title>
    <style>
      .issue {
        background-color: red;
      }
      .container {
        max-width: 960px;
        padding-right: 16px;
        padding-left: 16px;
        margin-left: auto;
        margin-right: auto;
      }
      body {
        font-family: 'Roboto', sans-serif;
      }
      .image-wrap img {
        max-width: 100%;
        height: auto;
      }
      .image-wrap {
        text-align: center;
        display: block;
      }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root">${body}</div>  
  </body>
</html>
  `;
};

exports.default = _default;