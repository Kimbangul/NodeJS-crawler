// https://myung-ho.tistory.com/m/109
const axios = require('axios');
const cheerio = require('cheerio');

// PARAM 상수
const URL = "https://velog.io/@kimbangul";


const getHtml = async (url) => {
  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);

    let content = [];
    const ARTICLE_SELECTOR = $("#root div:nth-child(2) div:nth-child(3) div:nth-child(4) div:nth-child(3) > div > div");

    // FUNCTION get tag
    const getTag = (tagSelector) => {
      let result = []
      
      const tagList = $(tagSelector).find(".tags-wrapper > a");

      tagList.map((idx,el)=>{
        const tag = $(el).text();
        result[idx] = tag;
      });
    
      return result;
    }

    ARTICLE_SELECTOR.map((idx, el) => {
      content[idx] = {
        head: $(el).find("img").attr('src'),
        date: $(el).find(".subinfo > span:first-of-type").text(),
        context: $(el).find("p").text(),
        href: $(el).find("a:first-child").attr('href'),
        headline: $(el).find("h2").text(),
        tags: getTag(el),
      }
    });

    content = JSON.stringify(content);
    return content;
  }
  catch(e){
    console.log(e)
  }
}

const articles = (url) => getHtml(url);

module.exports = articles;