import CodeDemo from "/Users/xujianxing/Documents/GitHub/coder-aiden/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/xujianxing/Documents/GitHub/coder-aiden/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/xujianxing/Documents/GitHub/coder-aiden/docs/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "/Users/xujianxing/Documents/GitHub/coder-aiden/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
