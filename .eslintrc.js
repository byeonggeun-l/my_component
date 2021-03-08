module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    'eslint:recommended',
    "plugin:vue/essential"
    // "plugin:vue/vue3-recommended",
    // "plugin:vue/vue3-essential",
    // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "brace-style": [
    //   'error',
    //   '1tbs'
    // ],
    "brace-style": [2, "1tbs"],
    // "space-before-blocks":['error'],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }],
    "keyword-spacing": ["error", { "before": true }],

    "indent": ["error", 2],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false,
      'ignores': ['pre', 'textarea'],
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea'],
    }],
    'vue/html-comment-content-newline': ['error',
      {
        'singleline': 'never',
        'multiline': 'never',
      },
    ],
    'vue/require-prop-types':'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          'head',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
  }
}
