// https://myung-ho.tistory.com/m/109
const axios = require('axios');
const cheerio = require('cheerio');

// PARAM 상수
const URL = "https://velog.io/@kimbangul";

const getHtml = async () => {
  try {
    const html = await axios.get(URL);
    const $ = cheerio.load(html.data);

    let content = [];
    const ARTICLE_SELECTOR = $("#root div:nth-child(2) div:nth-child(3) div:nth-child(4) div:nth-child(3) > div > div");

    ARTICLE_SELECTOR.map((idx, el) => {
      content[idx] = {
        head: $(el).find("img").attr('src'),
        date: $(el).find(".subinfo > span").text(),
        context: $(el).find("p").text(),
        href: $(el).find("a:first-child").attr('href'),
        headline: $(el).find("h2").text(),
        tags: 'tags',
      }
    });
    return content;
  }
  catch(e){
    console.log(e)
  }
}

const articles = getHtml();

module.exports= articles;