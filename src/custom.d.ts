declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.otf' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const src: string;
  export default src;
}
