import DefaultTheme from "vitepress/theme";
import "./custom.css";
import ServerStatus from "./components/ServerStatus.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ServerStatus", ServerStatus);
  },
};
