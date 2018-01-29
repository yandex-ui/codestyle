'use strict';

module.exports = {
    extends: [
        'loris/es6'
    ],
    rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        'camelcase': [ 'error', { properties: 'never' } ],
        'consistent-this': [ 'error', 'that' ],
        'eqeqeq': [ 'error', 'smart' ],
        'keyword-spacing': [ 'error', { before: true, after: true, overrides: { catch: { after: false } } } ],
        'no-bitwise': [ 'error' ],
        'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
        'no-empty': [ 'error' ],
        'no-eq-null': [ 'warn' ],
        'no-implicit-coercion': [ 'error', { allow: [ '!!' ] } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'quote-props': [ 'error', 'consistent-as-needed' ],
        'quotes': [ 'error', 'single' ],
        'space-before-function-paren': [ 'error', 'never' ],
        'strict': [ 'error', 'global' ],
    }
};
