import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@nitinreddy3/react-app",
  app: () => System.import("@nitinreddy3/react-app"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});
