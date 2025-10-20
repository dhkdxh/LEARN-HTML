const axios = require('axios'); //axios import

const url =
  'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';
//가져올 객체들이 담겨있는 url

axios
  .get(url)
  .then((result) => {
    if (result.status != 200) {
      throw new Error('request fail!');
    }

    if (result.data) {
      return result.data;
    }

    throw new Error('데이터가 없습니다.');
  })
  .then(
    //영화 리스트 반환하는 function
    (data) => {
      if (!data.articleList || data.articleList.size == 0) {
        throw new Error('영화 리스트가 존재하지 않습니다.');
      }
      return data.articleList;
    }
  )
  .then(
    //영화리스트를 제목과 순위 정보로 분리하고 싶음
    (articles) => {
      return articles.map((article, idx) => {
        return { title: article.title, rank: idx + 1 };
      });
    }
  )
  .then(
    //받은 리스트 정보 출력하려고 함
    (results) => {
      for (let movieinfo of results) {
        console.log(`[${movieinfo.rank}위 ${movieinfo.title}]`);
      }
    }
  )
  .catch((error) => {
    console.log('<< 에러 발생 >>');
    console.error(error);
  });
//get요청
