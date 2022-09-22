import { IMaterialComponent } from "@rxdrag/appx-plugin-sdk";
import { NAME } from "../consts";
import { ProLayoutDesigner } from "./designer";
import { behaviors } from "./designer/behaviors";
import { resource } from "./designer/resource";
import { ProLayout } from "./view";

const mobile: IMaterialComponent = {
  name: NAME,
  designer: ProLayoutDesigner,
  component: ProLayout,
  behaviors,
  resource
}

export default mobile;