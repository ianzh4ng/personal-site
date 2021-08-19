declare namespace IconCardModScssNamespace {
  export interface IIconCardModScss {
    icon: string;
    iconCard: string;
    textContent: string;
  }
}

declare const IconCardModScssModule: IconCardModScssNamespace.IIconCardModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IconCardModScssNamespace.IIconCardModScss;
};

export = IconCardModScssModule;
