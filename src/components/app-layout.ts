import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { layoutStyles } from './layout-styles';

@customElement('app-layout')
export class AppLayout extends LitElement {
  static styles = layoutStyles;

  private _headerTemplate() {
    return html` <header>
      <h3>MPA Blog ${'<='} Vite + Lit ( TS )</h3>
      <nav>
        <a href="/">HOME</a>
        <a href="/about/">ABOUT</a>
      </nav>
    </header>`;
  }

  private _footerTemplate() {
    return html` <footer>
      <p>&copy;2023 AMPM</p>
      <p>Powered by: Lit || Developed with: Vite</p>
    </footer>`;
  }

  protected render() {
    return html`
      ${this._headerTemplate()}
      <main>
        <slot></slot>
      </main>
      ${this._footerTemplate()}
    `;
  }
}
