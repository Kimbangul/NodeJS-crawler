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
    const root = $("#__next");
    // console.log(root);
    const articleList = $("li.PostsList__Item");
    console.log(articleList);
    
    articleList.map((el, idx) => {
      console.log(el, idx);
      content[idx] = {
        head: $(el).find("h3.PostsList__Text").text().replace(/\s/g, ""),
        date: 'date',
        context: 'context',
        href: 'href',
        headline: 'headline',
        tags: 'tags',
      }
    });

    // console.log(content);
    return content;
  }
  catch(e){
    console.log(e)
  }
}

const articles = getHtml();
