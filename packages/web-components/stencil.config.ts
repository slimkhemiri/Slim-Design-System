import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "slim",
  globalStyle: "src/global/global.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "dist-custom-elements",
      externalRuntime: false
    },
    {
      type: "www",
      serviceWorker: null
    },
    reactOutputTarget({
      outDir: "../react/src",
      stencilPackageName: "@slimkhemiri/web-components"
    })
  ]
};

