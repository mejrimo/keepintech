// IMPORT BOOTSTRAP'S JS
import * as bootstrap from 'bootstrap';
// IMPORT CUSTOM CSS
import '../scss/styles.scss';
// IMPORT LODASH
import get from 'lodash.get';
// IMPORT AXIOS
import axios from 'axios';

// APIs
const LATEST_NEWS = process.env.API_LATEST;
const BEST_NEWS = process.env.API_BEST;
const JOB_NEWS = process.env.API_JOB;
const ASK_NEWS = process.env.API_ASK;
const SHOW_NEWS = process.env.API_SHOW;
const ITEM_NEWS = process.env.API_ITEM;

// LINK TO DOM ELEMENTS
const latestBtn = document.querySelector('#latest');
const bestBtn = document.querySelector('#best');
const jobBtn = document.querySelector('#job');
const askBtn = document.querySelector('#ask');
const showBtn = document.querySelector('#show');
const loadMoreBtn = document.querySelector('#loadMoreBtn');

const newsType = document.querySelector('#newsType');
const newsDetails = document.querySelector('#newsDetails');

// VARIABLES
let newsDataArr = [];
let startIndex = 0;
let endIndex = 10;

// EVENT LISTENER
latestBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Latest News</h3>';
  getNews(LATEST_NEWS);
});
bestBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Best News</h3>';
  getNews(BEST_NEWS);
});
jobBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Job Section</h3>';
  getNews(JOB_NEWS);
});
askBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Ask Section</h3>';
  getNews(ASK_NEWS);
});
showBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Show Section</h3>';
  getNews(SHOW_NEWS);
});
loadMoreBtn.addEventListener('click', () => {
  loadMoreNews();
});

// DOM ELEMENT CREATOR
function cardCreator(tag, classes, text, links, v1, v2) {
  let element = document.createElement(tag);
  element.className = classes;
  element.innerHTML = text;
  element.href = links;
  element.setAttribute(v1, v2);

  return element;
}

// DATE CONVERTER
function dateConversion(unixTime) {
  let milliseconds = unixTime * 1000;
  let dateObject = new Date(milliseconds);
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  let date = dateObject.toLocaleString('en-US', options).split(',').join(' ');

  return date;
}

// FUNCTION TO FETCH THE APIs
async function getNews(API) {
  newsDataArr = [];

  await axios
    .get(API)
    .then((res) => {
      console.log('get news' + res.data);
      newsDataArr = res.data;
      displayNews();
    })
    .catch((err) => {
      console.log(err);
    });
}

// FUNCTION TO DISPLAY THE NEWS
function displayNews() {
  newsDetails.innerHTML = '';

  for (let i = startIndex; i < endIndex; i++) {
    let itemUrl = ITEM_NEWS + newsDataArr[i] + '.json';
    console.log('display news' + newsDataArr[i]);

    axios
      .get(itemUrl)
      .then((res) => {
        console.log('data display news' + res.data);
        let item = res.data;

        let date = dateConversion(`${get(item, 'time')}`);

        let col = cardCreator(
          'div',
          'card p-2 mb-2 mx-auto col-7 text-center',
          ''
        );
        let card = cardCreator('div', 'p-2', '');
        let cardBody = cardCreator('div', '', '');
        let newsHeading = cardCreator(
          'h5',
          'card-title',
          `${get(item, 'title')}`
        );
        let dateHeading = cardCreator(
          'h6',
          'text-muted',
          `<p>Published ${date}</p>`
        );
        let author = cardCreator(
          'h6',
          'text-muted',
          `<p>By ${get(item, 'by')}</p>`
        );
        let link = cardCreator(
          'a',
          'btn btn-dark',
          'Read More',
          `${get(item, 'url')}`,
          'target',
          '_blank'
        );

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(author);
        cardBody.appendChild(link);

        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.appendChild(col);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// LOAD MORE NEWS FUNCTION
function loadMoreNews() {
  startIndex += 10;
  endIndex += 10;

  if (endIndex > newsDataArr.length) {
    return;
  }

  for (let i = startIndex; i < endIndex; i++) {
    let itemUrl = ITEM_NEWS + newsDataArr[i] + '.json';
    console.log('load more' + newsDataArr[i]);

    axios
      .get(itemUrl)
      .then((res) => {
        console.log('data load more' + res.data);
        let item = res.data;

        let date = dateConversion(`${get(item, 'time')}`);

        let col = cardCreator(
          'div',
          'card p-2 mb-2 mx-auto col-7 text-center',
          ''
        );
        let card = cardCreator('div', 'p-2', '');
        let cardBody = cardCreator('div', '', '');
        let newsHeading = cardCreator(
          'h5',
          'card-title',
          `${get(item, 'title')}`
        );
        let dateHeading = cardCreator(
          'h6',
          'text-muted',
          `<p>Published ${date}</p>`
        );
        let author = cardCreator(
          'h6',
          'text-muted',
          `<p>By ${get(item, 'by')}</p>`
        );
        let link = cardCreator(
          'a',
          'btn btn-dark',
          'Read More',
          `${get(item, 'url')}`,
          'target',
          '_blank'
        );

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(author);
        cardBody.appendChild(link);

        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.appendChild(col);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// DEFAULT
window.onload = async () => {
  newsType.innerHTML = '<h3>Latest News</h3>';
  await getNews(LATEST_NEWS);
};
