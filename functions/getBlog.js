const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const headers = {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + process.env.NotionSecret,
      "Notion-Version": "2021-05-13",
    },
  };

  const url =
    "https://api.notion.com/v1/databases/" + process.env.BlogDB + "/query";

  return fetch(url, headers)
    .then((res) => res.json())
    .then((data) => {
      let pages = data.results.map((page) => {
        if (page.properties.Status.multi_select[0].name != "Complete") {
          return;
        }
        let result = {};
        result.name = page.properties.Name.title[0].plain_text;
        result.id = page.id;
        result.summary = page.properties.Summary.rich_text[0].plain_text;
        result.published = page.properties.Published.date.start;
        return result;
      });
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ results: pages }),
      };
    });
};
