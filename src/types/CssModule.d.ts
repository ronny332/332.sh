/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-default-export */
/* eslint-disable import/unambiguous */

/* https://www.npmjs.com/package/typescript-plugin-css-modules#custom-definitions */
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.sass' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.less' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.styl' {
  const classes: Record<string, string>;
  export default classes;
}
