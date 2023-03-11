import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../components/app-layout';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    .article-info {
      display: flex;
      gap: 2rem;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
  `;

  @property()
  header = '';

  @property()
  news: Array<{ title: string; date: string; id: number }> = [];

  showItem({ title = '', date = '', id = 0 }) {
    return html`
      <article>
        <h2>${title}</h2>
        <p class="article-info">
          ${date}
          <a href=${'/article/?id=' + id}>read</a>
        </p>
      </article>
    `;
  }

  listTemplate() {
    return html`
      ${this.news.length > 0
        ? this.news.map(this.showItem)
        : 'no items'}
    `;
  }

  render() {
    return html`
      <app-layout>
        <h1>${this.header}</h1>
        ${this.listTemplate()}
      </app-layout>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': AppHome;
  }
}
