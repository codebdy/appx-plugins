import { IMaterialComponent } from "@rxdrag/appx-plugin-sdk";
import { NAME } from "../consts";
import { ProLayoutDesigner } from "./designer";
import { behaviors } from "./designer/behaviors";
import { resources } from "./designer/resources";
import { ProLayout } from "./view";

const mobile: IMaterialComponent = {
  name: NAME,
  designer: ProLayoutDesigner,
  component: ProLayout,
  behaviors,
  resources
}

export default mobile;