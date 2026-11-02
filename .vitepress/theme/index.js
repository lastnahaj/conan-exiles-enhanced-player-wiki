import DefaultTheme from "vitepress/theme";
import WikiHome from "./components/WikiHome.vue";
import { h } from "vue";
import GuideEvidence from "./components/GuideEvidence.vue";
import "./custom.css";
import ExilesExtremeCatalog from "./components/ExilesExtremeCatalog.vue";
import ServerStatus from "./components/ServerStatus.vue";
import ValkyrieStatsGallery from "./components/ValkyrieStatsGallery.vue";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { "doc-before": () => h(GuideEvidence) }),
  enhanceApp({ app }) {
    app.component("WikiHome", WikiHome);
    app.component("ExilesExtremeCatalog", ExilesExtremeCatalog);
    app.component("ServerStatus", ServerStatus);
    app.component("ValkyrieStatsGallery", ValkyrieStatsGallery);
  },
};
