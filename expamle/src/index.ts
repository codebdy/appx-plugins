import { IPlugin } from "@appx/plugin-sdk";
import { rxPlugin } from "./Plugin";

declare const window: Window & { rxPlugin: IPlugin };

(function () {
  console.log("Example plugin 中")
  window.rxPlugin = rxPlugin
})()
