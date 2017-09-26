# weex-starter-kit

> weex-starter-kit

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `app.js`: entrance of the Weex page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `weex.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev:web

``` 
浏览器打开 [http://localhost:8080](http://localhost:8080)

## 项目结构

```
.
│  .babelrc                           # server 用的 babel 配置  
│  package.json                       # npm 包配置
│  README.md                          #  
├─build                               # 打包配置
├─config                              # 项目和构建配置 
├─dist                                # 打包结果目标目录
├─src                                 # 前端代码根目录
│  │  app.entry.js                    # weex应用入口
│  │  web.entry.js                    # web端入口
│  │  router.js                       # 路由配置
│  │  store.js                        # 数据仓库
│  ├─components                       # 共用的组件 
└─static                              # 静态资源




##demo

```
![](https://github.com/Skt0Dragon/weex-start-kit/blob/master/screen/demo.png) 
![](https://github.com/Skt0Dragon/weex-start-kit/blob/master/screen/demo2.png) 
![](https://github.com/Skt0Dragon/weex-start-kit/blob/master/screen/demo3.png) 

```

## notes

web预览加载外网图片，weex打包进行本地资源加载都可以.
web预览修改->src->tools-index.js中资源路径即可
