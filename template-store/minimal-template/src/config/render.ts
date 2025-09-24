import { createRenderer } from "@inspatial/kit/renderer";
import { InTrigger } from "@inspatial/kit/trigger";
import { InServe } from "@inspatial/kit/build";
import { envSupportsFeature } from "@inspatial/kit/vader";
import { AppRoutes } from "../app/routes.tsx";

/*################################(Create InSpatial Renderer)################################*/
createRenderer({
  mode: "browser",
  debug: "verbose",
  extensions: [
    InServe(),
    InTrigger(), // exposes universal and standard triggers
  ],
}).then((InSpatial: any) => {
  // Only attempt DOM mount when running in a browser/DOM environment
  if (envSupportsFeature("hasDocument")) {
    InSpatial.render(document.getElementById("app"), AppRoutes);
  }
});
