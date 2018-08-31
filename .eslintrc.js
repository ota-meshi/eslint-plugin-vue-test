module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    globals: {
        __static: true
    },
    extends: [
        'plugin:vue/essential'
    ],
    rules: {
        'indent': 'off',
        'vue/html-quotes': ["error", 'double'],
        'vue/no-unused-vars': 'error',
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        'vue/script-indent': ["error", 4, {
            "baseIndent": 1,
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": 1,
            "multiline": 1,
        }],
        "vue/name-property-casing": ["error", "PascalCase"],
        'vue/mustache-interpolation-spacing': ["error", 'never'],
        'vue/no-duplicate-attributes': ["error", {
            'allowCoexistClass': true,
            'allowCoexistStyle': true,
        }],
        "vue/singleline-html-element-content-newline": ["error", {
            "ignoreWhenNoAttributes": true,
            "ignores": ["pre", "textarea"]
        }],
        "vue/html-closing-bracket-spacing": ["error", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "always"
        }],
        "vue/component-name-in-template-casing": ["error",
            "PascalCase|kebab-case"
        ],
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline'
        }],
        'linebreak-style': ['error', 'unix'],
        'no-multiple-empty-lines': ['error', {
            'max': 1
        }]
    },
    "settings": {
        "html/html-extensions": [".html"],
    }
}