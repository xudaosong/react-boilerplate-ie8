module.exports =  {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  extends: [
    "standard",
    "standard-react"
  ],
  "env": {
    "browser": true,
    "amd": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
    "no-debugger": process.env.NODE_ENV == "production" ? 2 : 0
  }
}
