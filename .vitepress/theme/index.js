import DefaultTheme from "vitepress/theme";
import WikiHome from "./components/WikiHome.vue";
import GuideTools from "./components/GuideTools.vue";
import GuideDirectory from "./components/GuideDirectory.vue";
import GuideFooter from "./components/GuideFooter.vue";
import ImageViewer from "./components/ImageViewer.vue";
import SavedGuides from "./components/SavedGuides.vue";
import { h } from "vue";
import GuideEvidence from "./components/GuideEvidence.vue";
import "./custom.css";
import ExilesExtremeCatalog from "./components/ExilesExtremeCatalog.vue";
import ServerStatus from "./components/ServerStatus.vue";
import ValkyrieStatsGallery from "./components/ValkyrieStatsGallery.vue";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    "doc-before": () => [h(GuideTools), h(GuideEvidence)],
    "doc-after": () => h(GuideFooter),
    "layout-bottom": () => h(ImageViewer),
  }),
  enhanceApp({ app }) {
    app.component("WikiHome", WikiHome);
    app.component("GuideDirectory", GuideDirectory);
    app.component("SavedGuides", SavedGuides);
    app.component("ExilesExtremeCatalog", ExilesExtremeCatalog);
    app.component("ServerStatus", ServerStatus);
    app.component("ValkyrieStatsGallery", ValkyrieStatsGallery);
  },
};
