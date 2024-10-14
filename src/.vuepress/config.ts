import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "程序员阿建",
  description: "程序员阿建的技术空间",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
