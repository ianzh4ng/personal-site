declare namespace FooterModScssNamespace {
  export interface IFooterModScss {
    footer: string;
  }
}

declare const FooterModScssModule: FooterModScssNamespace.IFooterModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterModScssNamespace.IFooterModScss;
};

export = FooterModScssModule;
