import { load } from '../utils';
import { AppArticle } from './app-article';

const appArticleStart = (data: any) => {
  const articleEl = window.document.querySelector(
    'app-article'
  ) as AppArticle;

  articleEl.item = data;
};

load(appArticleStart, false);

// OR this way, you just need to add index.ts script at head
// import './app-article';

// const appArticleStart = (data: any) => {
//   const articleEl = document.createElement('app-article');

//   articleEl.item = data;

//   window.document.body.append(articleEl);
// };

// load(appArticleStart, false);
