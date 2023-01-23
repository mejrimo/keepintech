exports.handler = async (event) => {
  // Più tardi imposteremo una variabile d'ambiente interna a Netlify stesso, accessibile semplicemente così:
  const LATEST_NEWS = process.env.API_LATEST;
  const BEST_NEWS = process.env.API_BEST;
  const JOB_NEWS = process.env.API_JOB;
  const ASK_NEWS = process.env.API_ASK;
  const SHOW_NEWS = process.env.API_SHOW;
  const ITEM_NEWS = process.env.API_ITEM;

  // qui facciamo la chiamata alla API esattamente come la facevamo prima in index_dev.js
  const getNews = async (API) => {
    newsDataArr = [];

    await axios
      .get(API)
      .then((res) => {
        newsDataArr = res.data;
        displayNews();
        return newsDataArr;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body),
    };
  };

  return pass(newsDataArr);
};
