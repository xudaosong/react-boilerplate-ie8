# react-boilerplate-ie8

react-boilerplate-ie8是基于React，能在IE8运行的脚手架，它具有以下特性：

* **按模块划分目录结构**
* **静态代码检查**
* **redux**
* **redux异步中间件**
* **axios**
* **国际化**
* **postcss**
* **CSSModules**
* **单元测试**

## 如何使用
1. 本机需要安装node和git
3. git clone http://git.sdp.nd/fed/react-boilerplate.git
4. npm install
5. npm run ie8:mock

## 命令

```bash

# 默认开启服务器，地址为 ：http://localhost:8080/

# 能在ie9+运行热更新，页面会自动刷新
npm run start

# 能在ie9+运行热更新，页面会自动刷新，同时运行mock
npm run start:mock

# 同npm run start
npm run dev

# 同npm run start:mock
npm run dev:mock

# 能在ie8+运行热更新，但页面不会自动刷新
npm run ie8

# 能在ie8+运行热更新，同时运行mock，但页面不会自动刷新
npm run ie8:mock

# 运行单元测试
npm run test

# 运行单元测试并监听变更
npm run test:watch

# 构建发布生产的版本
npm run dist

```

## 目录说明

```
./
├── cfg/                       // webpack构建脚本
├── lib/                       // 引用的部份第三方库，因为直接引用会产生IE8不兼容问题，所以对第三方库的源码进行修改
├── doc/                       // 项目使用到技术文档
├── mock/                      // 存放 mock 数据
├── polyfill/                  // 浏览器兼容的代码
├── src/                       // 项目源代码
├── ├── config                 // 用于配置开发环境、生产环境和测试环境
├── ├── i18n                   // 国际化，使用react-intl实现
├── ├── modules                // 模块的开发目录
├── ├── ├── example            // 示例代码，供实现参考（可移除）
├── ├── ├── ├── components     // example模块的组件集，按组件目录划分，组件自包含专属样式及图片
├── ├── ├── ├── actions.js     // example模块所需要redux的action creator
├── ├── ├── ├── actionTypes.js // example模块所需要redux的action常量定义
├── ├── ├── ├── detail.jsx     // example模块的详情组件，用于与redux建立关联的容器型组件
├── ├── ├── ├── example.jsx    // example模块的列表组件，用于与redux建立关联的容器型组件
├── ├── ├── ├── index.js       // example模块的入口
├── ├── ├── ├── readme.md      // example模块的功能描述及示例
├── ├── ├── ├── reducers.js    // example模块redux的reducer
├── ├── ├── share              // 模块的共享示例代码，供实现参考（可移除）
├── ├── routes                 // 路由
├── ├── static                 // 静态文件，如公共的图片、资源等（目录需保留，里面的内容可删除）
├── ├── store                  // 生成redux的store，并关联所有的reducer
├── ├── theme                  // 样式与皮肤（目录需保留，里面的内容可删除）
├── ├── utils                  // 工具箱
├── ├── index.js               // 站点的js入口
├── test/                      // 测试用例加载代码
├── index.html                 // 站点启动的入口文件
├── server.js                  // Webpack构建启动的入口文件
└── webpack.config.js          // webpack 配置文件
```

## 项目编码约定

**符合eslint静态代码检查**

1. 文件/目录命名
  * 文件名使用 camelCase
  * 目录名使用 camelCase

2. 文件组织规则约定
  * 模块、组件的组织方式
  * 文件名不加 View, Component 等后缀区分
  * React组件使用 .jsx 后缀
  * 组件项目必须带 readme.md 自述文件, 包括以下信息:
    - 功能描述
    - 编译、运行或调用示例
    - 开发人员或团队联系方式

3. 代码命名约定

  常量，变量，方法，函数，类等等的命名规则

  * 变量名，方法名, 函数使用 camelCase
  * 类名使用 CamelCase
  * 常量名：
    - 全局常量名使用大写字母＋数字＋下划线的规则命名
    - 块或文件范围常量不做此要求
