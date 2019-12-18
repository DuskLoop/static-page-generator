import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import fs from 'fs';
import template from './template';
import fetch from 'node-fetch';

fetch(
  'http://eniacdata.atlassian.net/rest/api/3/search?jql=issuekey = "EK-808" &fields=summary, description, customfield_10036, customfield_10035, customfield_10034, customfield_10010&maxResults=170&startAt=0&expand=renderedFields',
  {
    headers: {
      Authorization:
        'Basic ZGFuaWVsLmhpbGRlc3NvbkBlbmlhYy5zZTo4ZmJBYTNrNXJjZkFhU0tYSFNRU0YxREI=',
      'Content-Type': 'application/json',
    },
  }
)
  .then(res => res.text())
  .then(body => {
    const response = JSON.parse(body);

    const staticMarkup = renderToStaticMarkup(<App data={response} />);

    // console.log(staticMarkup);

    const markup = template({
      body: staticMarkup,
      title: 'Issue Test',
    });

    // console.log(markup);

    fs.writeFile('result/index.html', markup, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Done without any errors');
      }
    });
  });
