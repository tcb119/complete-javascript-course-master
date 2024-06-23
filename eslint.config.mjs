import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'semi': 1,                     // ���������T�{ [ĵ�i]
      'prefer-const': 'off',         // �j��]�w�L���ܪ��ܼƭn��const�ŧi [����]
      'quotes': ['error', 'single'], // �r�ꪺ�w�q�Ÿ� [���~�A��޸�]
    }
  },
  pluginJs.configs.recommended,
  {
    files: ["complete-javascript-course-master/**/*.js", "complete-javascript-course-master/**/*.ts"],  // ���w���?��
  }
];
