module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "**/class/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // 해당옵션을 끈다고 할 수 있다.
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": "off",
    // string값을 !== "" 이런식으로정확하게 표기해야함.
    "@typescript-eslint/strict-boolean-expressions": "off",
    // return void라 하더라도 promise로 표기를 해야한다. Promise<void>;
    "@typescript-eslint/no-misused-promises": "off",
    // 슬래시를 3개 쓰지마, import를 할때 ///를 사용하는데 next가 자동으로 만드니까 옵션끄자
    "@typescript-eslint/triple-slash-reference": "off",
  },
};
// yarn add eslint-config-prettier --dev
