declare namespace FooterModScssNamespace {
  export interface IFooterModScss {
    copyright: string;
    footer: string;
    footerText: string;
    iconBar: string;
  }
}

declare const FooterModScssModule: FooterModScssNamespace.IFooterModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterModScssNamespace.IFooterModScss;
};

export = FooterModScssModule;
