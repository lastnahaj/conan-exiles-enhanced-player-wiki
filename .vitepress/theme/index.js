import DefaultTheme from "vitepress/theme";
import "./custom.css";
import ExilesExtremeCatalog from "./components/ExilesExtremeCatalog.vue";
import ServerStatus from "./components/ServerStatus.vue";
import ValkyrieStatsGallery from "./components/ValkyrieStatsGallery.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ExilesExtremeCatalog", ExilesExtremeCatalog);
    app.component("ServerStatus", ServerStatus);
    app.component("ValkyrieStatsGallery", ValkyrieStatsGallery);
  },
};
