import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../components/app-layout';

@customElement('app-article')
export class AppArticle extends LitElement {
  @property()
  item!: {
    title: string;
    date: string;
    id: number;
    content: Array<string>;
  };

  protected contentTemplate() {
    return html`
      ${this.item?.content?.length > 0
        ? this.item?.content.map((val) => html`<p>${val}</p>`)
        : 'no items'}
    `;
  }

  protected render() {
    return html`
      <app-layout>
        <h1>${this.item?.title}</h1>
        <p>${this.item?.date}</p></p>
        ${this.contentTemplate()}
      </app-layout>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-article': AppArticle;
  }
}
