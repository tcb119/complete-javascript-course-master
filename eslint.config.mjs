import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'semi': 1,                     // 結尾分號確認 [警告]
      'prefer-const': 'off',         // 強制設定無改變的變數要用const宣告 [關閉]
      'quotes': ['error', 'single'], // 字串的定義符號 [錯誤，單引號]
    }
  },
  pluginJs.configs.recommended,
  {
    files: ["complete-javascript-course-master/**/*.js", "complete-javascript-course-master/**/*.ts"],  // 指定文件?型
  }
];
