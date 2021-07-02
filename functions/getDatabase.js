const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  let q;
  if (event.queryStringParameters.q == "projects") {
    q = process.env.ProjectsDB;
  }
  if (event.queryStringParameters.q == "blog") {
    q = process.env.BlogDB;
  }
  if (q == undefined) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Invalid Query" }),
    };
  }

  const headers = {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + process.env.NotionSecret,
      "Notion-Version": "2021-05-13",
    },
  };

  const url = "https://api.notion.com/v1/databases/" + q + "/query";

  return fetch(url, headers)
    .then((res) => res.json())
    .then((data) => {
      let pages = data.results.map((page) => {
        let result = {};
        result.name = page.properties.Name.title[0].plain_text;
        result.status = page.properties.Status.multi_select[0].name;
        result.statusColor = page.properties.Status.multi_select[0].color;
        result.summary = page.properties.Summary.rich_text[0].plain_text;
        result.image = "";
        result.tags = page.properties.Tags.multi_select.map((tag) => {
          let _tag = {};
          _tag.name = tag.name;
          _tag.color = tag.color;
          return _tag;
        });

        return result;
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ results: pages }),
      };
    });
};
