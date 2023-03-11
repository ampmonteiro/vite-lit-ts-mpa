import { LitElement } from 'lit';
import '../components/app-layout';
export declare class AppArticle extends LitElement {
    item: {
        title: string;
        date: string;
        id: number;
        content: Array<string>;
    };
    protected contentTemplate(): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-article': AppArticle;
    }
}
