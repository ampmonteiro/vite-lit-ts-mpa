import { LitElement } from 'lit';
import '../components/app-layout';
export declare class AppHome extends LitElement {
    static styles: import("lit").CSSResult;
    header: string;
    news: Array<{
        title: string;
        date: string;
        id: number;
    }>;
    showItem({ title, date, id }: {
        title?: string | undefined;
        date?: string | undefined;
        id?: number | undefined;
    }): import("lit-html").TemplateResult<1>;
    listTemplate(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-home': AppHome;
    }
}
