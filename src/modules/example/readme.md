# 示例组件

开发人员：许道松（803850）

## 功能描述

这是一个示例组件

## 调用方法
* reducers.js

```
import { reducers as exampleReducers } from 'modules/example'

export default combineReducers({
  ...exampleReducers
})

```

* exampleDemo.js

```
import React, {Component} from 'react'
import Example from 'modules/example/example'

export default class ExampleDemo extends Component {
  render() {
    return (
      <Example />
    )
  }
}
```
