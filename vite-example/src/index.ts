import { IPlugin } from "@rxdrag/appx-plugin-sdk";
import { rxPlugin } from "./Plugin";

declare const window: Window & { rxPlugin: IPlugin };

(function () {
  window.rxPlugin = rxPlugin
  console.log("Example plugin 中")
})()
