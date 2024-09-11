async function initMicroAppMessage() {
  const { default: MicroAppMessage } = await import("./message-DGijR9_1.mjs");
  const microAppUtils = await import("./index-J5onhg2q.mjs").then((n) => n.u);
  const { getMicroApp, isBaseApp } = microAppUtils.default;
  const { getMainAppConfigs } = await import("./index-J5onhg2q.mjs").then((n) => n.j);
  const MainAppConfigs = await getMainAppConfigs();
  const microAppMessage = new MicroAppMessage(getMicroApp(), isBaseApp(), MainAppConfigs["disable-sandbox"] || false);
  return microAppMessage;
}
export {
  initMicroAppMessage
};
