const https = require("https");

let location = 44418;

let options = {
  hostname: "www.metaweather.com",
  method: "GET",
  //path: "/api/location/" + location+"/",
  path: `/api/location/${location}/`,
  //path: `/api/location/search/?query=Bogotá`,
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
