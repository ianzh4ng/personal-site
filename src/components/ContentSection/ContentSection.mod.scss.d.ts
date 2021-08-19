declare namespace ContentSectionModScssNamespace {
  export interface IContentSectionModScss {
    contentSection: string;
  }
}

declare const ContentSectionModScssModule: ContentSectionModScssNamespace.IContentSectionModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ContentSectionModScssNamespace.IContentSectionModScss;
};

export = ContentSectionModScssModule;
