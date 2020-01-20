export default ({ body, title }: { body: string; title: string }) => {
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
        font-family: 'Nunito Sans', sans-serif;
        margin: 0;
      }
      .image-wrap img {
        max-width: 100%;
        height: auto;
      }
      .image-wrap {
        text-align: center;
        display: block;
      }
      .top-bar {
        background-color: #435465;
      }
      .top-bar-logo {
        margin: 4px 8px 4px 16px; 
      }
      .header {
        padding: 32px 0px 32px;
        border-bottom: 1px solid #D9D8D7;
      }
      .header-title {
        font-weight: normal;
        font-size: 18px;
        margin: 0;
      }
      .header-version {
        font-style: normal;
        font-weight: bold;
        font-size: 24px; 
        margin: 0;
      }
      .header-realease-date {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.6);
        margin: 0;
      }
      .issue-container {
        margin: 24px 0px;
      }
      .issue-title {
        margin: 0px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        display: inline;
      }
      .issue-description {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
      }
      .issue-group-title {
        margin: 24px 0px;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
      }
      .issue-title-row {
        display: flex;
        justify-content: space-between;
        margin: 6px 0px;
      }
      .issue-more-info-link {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        white-space: nowrap;
      }
      .issue-key {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.5);
        white-space: nowrap;
      }
      .issue-group-issues-container {
        padding-bottom: 16px;
        border-bottom: 1px solid #D9D8D7;
      }
      @font-face {
        font-family: "Brandon Grotesque";
        font-weight: 500;
        src: url(./assets/brandon-grotesque-light-58a8a4b38001d.otf) format("opentype");
      }
      @font-face {
        font-family: "Brandon Grotesque";
        font-weight: 800;
        src: url(./assets/brandon-grotesque-black-58a8a3e824392.otf) format("opentype");
      }
      @font-face {
        font-family: "Nunito Sans";
        font-weight: 500;
        src: url(./assets/NunitoSans-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Nunito Sans";
        font-weight: 800;
        src: url(./assets/NunitoSans-Bold.ttf) format("truetype");
      }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="assets/favicon.ico" />
  </head>
  <body>
    <div id="root">${body}</div>  
  </body>
</html>
  `;
};
