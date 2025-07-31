import { createRenderer } from "@inspatial/run";
import { App } from "./src/App.tsx";

// 1. Create InSpatial renderer
createRenderer({
  mode: "browser",
  debug: "verbose",
}).then((InSpatial) => {
  InSpatial.render(document.getElementById("app"), App);
});

// 2. Set up typescript for JSX Components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}
