declare namespace TextLinkModScssNamespace {
  export interface ITextLinkModScss {
    externalIcon: string;
    textLink: string;
  }
}

declare const TextLinkModScssModule: TextLinkModScssNamespace.ITextLinkModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TextLinkModScssNamespace.ITextLinkModScss;
};

export = TextLinkModScssModule;
