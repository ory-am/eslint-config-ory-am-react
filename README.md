# [ory.am](https://ory.am)/eslint-config-ory-am-react

## Installation

Install ESLint and the our configuration. You will probably also want to use [`eslint-config-ory-am`](https://github.com/ory-am/eslint-config-ory-am)
```.sh
npm install --save-dev eslint eslint-config-ory-am eslint-config-ory-am-react
```

Create a `.eslintrc.json` file in your root with the following content:
```.json
{
  "extends": [
    "eslint-config-ory-am",
    "eslint-config-ory-am-react"
  ],
  "env": {
    "node": true,
    "browser": true
  }
}
```

Add a linter script to your `package.json`. In the following example, all files in the `src` and `test` folder (and their subfolders) are checked:
```.json
{
  "scripts": {
    "lint": "eslint \"+(src|test)/**/*.js\" --fix"
  }
}
```

## Watcher task

You can use [`chokidar-cli`](https://github.com/kimmobrunfeldt/chokidar-cli) to add a task that lints your files on save. First install it:
```.sh
npm install --save-dev chokidar-cli
```

Then add a watch script to your `package.json`. In the following example, chokidar will look for changes in any files in the `src` and `test` folder (and their subfolders):
```.json
{
  "scripts": {
    "lint": "eslint \"+(src|test)/**/*.js\" --fix",
    "lint:watch": "npm run watch:js -- -c \"npm run lint\"",
    "watch:js": "chokidar \"+(src|test)/**/*.js\" --initial"
  }
}
