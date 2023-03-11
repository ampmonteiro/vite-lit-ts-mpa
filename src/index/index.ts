import { load } from '../utils';
import { AppHome } from './app-home';

const appHomeStart = (data: Array<any>) => {
  const homeEl = document.querySelector('app-home') as AppHome;

  homeEl.news = data;
};

load(appHomeStart);

// OR this way, you just need to add index.ts script at head
// import './app-home';

// const appHomeStart = (data: Array<any>) => {
//   const homeEl = document.createElement('app-home');

//   homeEl.header = 'Blog';

//   homeEl.news = data;

//   window.document.body.append(homeEl);
// };

// load(appHomeStart);
