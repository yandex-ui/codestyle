# eslint-config-yandex-personal

[ESLint](http://eslint.org/) config for Yandex Personal services.

## Installation

```
npm install --save-dev eslint eslint-config-yandex-personal
```

## Usage

Include config in your [.eslintrc.js](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) file:

* For [ECMAScript 6](https://www.ecma-international.org/ecma-262/6.0/index.html)

```js
module.exports = {
    extends: 'yandex-personal/es6',
};
```

* For [JSDOC](http://usejsdoc.org/)

```js
module.exports = {
    extends: 'yandex-personal/jsdoc',
};
```
