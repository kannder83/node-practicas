const https = require("https");

let username = "kannder83";

let CHROME_USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
let SAFARAI_USER_AGENT =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1";
let FIREFOX_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0";

let options = {
  host: "api.github.com",
  path: "/users/" + username,
  method: "GET",
  headers: { "user-agent": CHROME_USER_AGENT },
};

let request = https.request(options, (response) => {
  let body = "";
  response.on("data", (out) => {
    body += out;
  });
  response.on("end", (out) => {
    let json = JSON.parse(body);
    console.log(json);
  });
});

request.on("error", (e) => {
  console.log(e);
});

request.end();
