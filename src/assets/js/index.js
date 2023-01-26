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
const SHOW_NEWS = process.env.API_SHOW;
const ITEM_NEWS = process.env.API_ITEM;

// LINK TO DOM ELEMENTS
const latestBtn = document.querySelector('#latest');
const bestBtn = document.querySelector('#best');
const jobBtn = document.querySelector('#job');
const showBtn = document.querySelector('#show');
const loadMoreBtn = document.querySelector('#loadMoreBtn');

const newsType = document.querySelector('#newsType');
const newsDetails = document.querySelector('#newsDetails');

// VARIABLES
let newsDataArr = [];
let startIndex = 0;
let endIndex = 10;

// DEFAULT
window.onload = () => {
  newsType.innerHTML = '<h3>Latest News</h3>';
  getNews(LATEST_NEWS);
};

// EVENT LISTENER
latestBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Latest News</h3>';
  loadMoreBtn.classList.remove('disabled');
  getNews(LATEST_NEWS);
});
bestBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Best News</h3>';
  loadMoreBtn.classList.remove('disabled');
  getNews(BEST_NEWS);
});
jobBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Job Section</h3>';
  loadMoreBtn.classList.remove('disabled');
  getNews(JOB_NEWS);
});
showBtn.addEventListener('click', () => {
  newsType.innerHTML = '<h3>Show Section</h3>';
  loadMoreBtn.classList.remove('disabled');
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
function getNews(API) {
  newsDataArr = [];

  axios
    .get(API)
    .then((res) => {
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
  startIndex = 0;
  endIndex = 10;

  for (let i = startIndex; i < endIndex; i++) {
    let itemUrl = `${ITEM_NEWS + newsDataArr[i] + '.json'}`;

    axios
      .get(itemUrl)
      .then((res) => {
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

  for (let i = startIndex; i < endIndex; i++) {
    let itemUrl = `${ITEM_NEWS + newsDataArr[i] + '.json'}`;
    if (startIndex >= newsDataArr.length) {
      loadMoreBtn.classList.add('disabled');
      return;
    } else if (endIndex >= newsDataArr.length) {
      endIndex = newsDataArr.length;
    } else {
      i++;
    }

    axios
      .get(itemUrl)
      .then((res) => {
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
