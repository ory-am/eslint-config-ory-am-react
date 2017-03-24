module.exports = {
  'extends': 'plugin:react/recommended',
  'rules': {
    'react/forbid-prop-types:': 'off',
    'react/no-comment-textnodes': 'error',
    'react/no-danger': 'off',
    'react/no-multi-comp': 'off',
    'react/no-render-return-value': 'off',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'off',
    'react/no-unknown-property': ['error', { ignore: ['styleName'] }],
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'warn',
    'react/require-extension': 'error',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'off',
    'react/wrap-multilines': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': 'off',
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': 'warn',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': 'error',
    'flowtype/define-flow-type': 'error',
    'flowtype/require-parameter-type': 'error',
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]+)+$']
  },
  'plugins': [
    'react'
  ]
}
