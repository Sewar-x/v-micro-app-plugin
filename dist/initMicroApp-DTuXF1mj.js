"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("./index-BtCqO1nb.js");
async function initMicroApp(isBaseApp, app, options, router, store) {
  if (isBaseApp) {
    console.log(`📌${options.projectName}为主应用, 注册主应用!`);
    index.microApp.router.setBaseAppRouter(router);
    const { getMainAppConfigs } = await Promise.resolve().then(() => require("./index-BtCqO1nb.js")).then((n) => n.appConfigs);
    const MainAppConfigs = await getMainAppConfigs();
    index.microApp.start(MainAppConfigs);
  } else {
    console.log(`📌${options.projectName}为子应用, 注册子应用!`);
    if (window) {
      window.unmount = () => {
        router = null;
      };
    }
  }
}
exports.initMicroApp = initMicroApp;
