# v-micro-app-plugin



## 🚀 快速上手你的微前端之旅

​	v-micro-app-plugin 是一款基于京东MicroApp框架构建的微前端插件，旨在帮助开发者快速构建、安装并集成微应用到多个系统中，实现高效、灵活的前端模块化开发。通过此插件，你可以轻松地在不同系统中共享和复用前端组件或服务，提升开发效率和系统间的互操作性。

## 🎯 特性

💎 快速集成：简单配置，即可将MicroApp微应用作为插件快速集成到现有系统中。

💎 灵活部署：支持动态加载和卸载微应用，便于按需加载，提升页面加载速度。

💎 无缝通信：内置跨应用通信机制，支持不同微应用间的数据交换和事件传递。

💎 易于扩展：插件架构清晰，易于根据业务需求进行定制和扩展。

## 📦 安装

- 通过 npm 安装

```bash
npm i v-micro-app-plugin --save
```

- 通过 pnpm 安装

```bash
pnpm i v-micro-app-plugin --save
```

- 通过 yarn 安装

```bash
yarn add v-micro-app-plugin
```

## 🔧 使用指南

1、引入插件

  	在你的主应用或目标系统中引入v-micro-app-plugin。以下是简单使用的一个基本示例：

```
import initMyMicroApp from 'v-micro-app-plugin'

router =  await import('@/router').then(async (routerModule: any) => {
	return await routerModule.setupRouter(app)
  })
}

export function setupMicroApp(app: App, router?: any) {
  const options = {
    projectName: '应用名称',
    microAppUrl: {},
    subAppConfigs: {},
    isBaseApp: false,
    basePath: '打包路径',
  }
  return initMyMicroApp(app, options, router)
}
```

2、配置微应用

  	在插件配置中指定微应用的入口、名称、版本等信息。

3、加载微应用

  	插件将自动处理微应用的加载、挂载和卸载。你只需在页面上准备好相应的挂载点即可。

4、跨应用通信

  	使用插件提供的API进行跨应用通信，如事件发布和订阅。
