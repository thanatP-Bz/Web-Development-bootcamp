const url = require("url");
const adress = "https://astro.meemodel.com/";
const parseUrl = url.parse(adress);

console.log(parseUrl.host);

const url2 = require("url"); ///require file
const adress2 = "https://www7.nungsub.com/page/2/";
const parseUrl2 = url2.parse(adress2);

console.log(parseUrl2);
