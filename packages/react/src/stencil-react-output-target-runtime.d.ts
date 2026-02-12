/**
 * Temporary shim for tooling that fails to resolve `@stencil/react-output-target/runtime`
 * via `package.json#exports`.
 *
 * At runtime, the real module is provided by the `@stencil/react-output-target` dependency.
 */
declare module "@stencil/react-output-target/runtime" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type EventName<T = any> = string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type StencilReactComponent<TElement = any, TEvents = any> = any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function createComponent<TElement = any, TEvents = any>(opts: any): any;
}

