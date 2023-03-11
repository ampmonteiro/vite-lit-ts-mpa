import { css } from 'lit';

export const layoutStyles = css`
  :host {
    margin: 0 auto;
    max-width: 1024px;
    height: 97vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  footer,
  nav {
    display: flex;
    gap: 2rem;
  }

  nav {
    padding-top: 1rem;
  }

  header h3 {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  a,
  ::slotted(a) {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  ::slotted(h1) {
    font-size: 3.2em;
    line-height: 1.1;
  }
`;
