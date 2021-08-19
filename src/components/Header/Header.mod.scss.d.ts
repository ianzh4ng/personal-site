declare namespace HeaderModScssNamespace {
  export interface IHeaderModScss {
    header: string;
  }
}

declare const HeaderModScssModule: HeaderModScssNamespace.IHeaderModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModScssNamespace.IHeaderModScss;
};

export = HeaderModScssModule;
