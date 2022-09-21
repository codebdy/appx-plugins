import { Device, IPlugin } from "@appx/plugin-sdk";
import { mobileComponents, pcComponents, webSiteComponents } from "./components";
import { locales } from "./loacales";

export const rxPlugin: IPlugin = {
  id: "appx.plugins.Example",
  title: "Example",
  version: "1.0",
  description: "Description",
  components: {
    [Device.PC]: pcComponents,
    [Device.Mobile]: mobileComponents,
    [Device.Website]: webSiteComponents,
  },
  model: undefined,
  locales
}