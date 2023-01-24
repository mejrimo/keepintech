exports.handler = async (event) => {
  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body),
    };
  };
  // FUNCTION TO FETCH THE APIs
  function getNews(API) {
    newsDataArr = [];

    axios
      .get(API)
      .then((res) => {
        newsDataArr = res.data;
        displayNews();
        return pass(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
