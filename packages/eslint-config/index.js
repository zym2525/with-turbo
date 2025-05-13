const js = require("@eslint/js")
const tseslint = require("typescript-eslint")
const configPrettier = require("eslint-config-prettier")
const pluginPrettier = require("eslint-plugin-prettier")
const { defineConfig } = require("eslint/config")

module.exports = defineConfig([
  {
    ...js.configs.recommended,
    languageOptions: {
      //   globals: {
      //     Fn: 'readonly',
      //     PromiseFn: 'readonly',
      //     RefType: 'readonly',
      //     LabelValueOptions: 'readonly',
      //     EmitType: 'readonly',
      //     TargetContext: 'readonly',
      //     ComponentElRef: 'readonly',
      //     ComponentRef: 'readonly',
      //     ElRef: 'readonly',
      //     global: 'readonly',
      //     ComponentRoutes: 'readonly',
      //     ValueOf: 'readonly',
      //     // script setup
      //     defineProps: 'readonly',
      //     defineEmits: 'readonly',
      //     defineExpose: 'readonly',
      //     withDefaults: 'readonly',
      //     defineOptions: 'readonly',
      //     ITableCol: 'readonly',
      //     ITableBtn: 'readonly',
      //     API: true,
      //     PropType: true,
      //     OperationBtnType: true,
      //     EChartsOption: true,
      //     WeMapModel: true,
      //   }
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      ...pluginPrettier.configs.recommended.rules,
      "no-debugger": "off",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "max-lines": ["error", 700], //限制行数 请勿修改 请优化你的代码
      "prettier/prettier": [
        "error",
        {
          // 一行最多 100 字符
          printWidth: 100,
          // 使用 4 个空格缩进
          tabWidth: 2,
          // 不使用缩进符，而使用空格
          useTabs: false,
          // 行尾不需要有分号
          semi: true,
          // 使用单引号
          singleQuote: true,
          // 对象的 key 仅在必要时用引号
          quoteProps: 'as-needed',
          // jsx 不使用单引号，而使用双引号
          jsxSingleQuote: false,
          // 尾随逗号
          trailingComma: 'es5',
          // 大括号内的首尾需要空格
          bracketSpacing: true,
          // jsx 标签的反尖括号需要换行
          jsxBracketSameLine: false,
          // 箭头函数，只有一个参数的时候，也需要括号
          arrowParens: 'always',
          // 每个文件格式化的范围是文件的全部内容
          rangeStart: 0,
          rangeEnd: Infinity,
          // 不需要写文件开头的 @prettier
          requirePragma: false,
          // 不需要自动在文件开头插入 @prettier
          insertPragma: false,
          // 使用默认的折行标准
          proseWrap: 'preserve',
          // 根据显示样式决定 html 要不要折行
          htmlWhitespaceSensitivity: 'css',
          // 换行符使用 lf
          endOfLine: 'auto',
        },
      ],
    },
  },
  ...tseslint.config({
    extends: [...tseslint.configs.recommended],
    files: ["**/*.?([cm])ts", "**/*.?([cm])tsx"],
    rules: {
      "@typescript-eslint/no-redeclare": "error",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/prefer-as-const": "warn",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { disallowTypeAnnotations: false, fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/prefer-literal-enum-member": [
        "error",
        { allowBitwiseExpressions: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  }),
  {
    files: ["**/*.d.ts"],
    rules: {
      "eslint-comments/no-unlimited-disable": "off",
      "import/no-duplicates": "off",
      "no-restricted-syntax": "off",
      "unused-imports/no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.?([cm])js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
])
