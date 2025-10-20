const axios = require('axios'); //axios import

async function getTop20Movies() {
  const url =
    'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';
  //가져올 객체들이 담겨있는 url

  try {
    const result = await axios.get(url); //네트워크로 데이터를 받아오니 await시킴
    const { data } = result; //result 값에는 data 프로퍼티가 있음
    if (!data.articleList || data.articleList.size === 0) {
      throw new Error('데이터가 없음');
    }

    const movieinfos = data.articleList.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });

    for (let movieinfo of movieinfos) {
      console.log(`[${movieinfo.rank}위 ${movieinfo.title}]`);
    }
  } catch (error) {
    console.log(error);
  }
}

getTop20Movies();
