## 安装

### npm安装
输入下列命令可以安装starx-ui
```sh
npm i starx-ui
```

### 全部引入

```javascript
import Vue from 'vue'
import StarxUI from 'starx-ui';
import 'starx-ui/lib/styles/starx-ui.css';

Vue.use(StarxUI);
```

### 按需加载
1、按需加载需要借助 `babel-plugin-component` 包。下载好之后，在你的 `.babelrc` 文件中添加如下内容
```javascript
{
  "plugins": [
      ["component", {
          "libraryName": "starx-ui",
          "libDir": "lib",
          "styleLibrary": {
              "name": "styles",
              "base": false, // no base.css file
              "path": "[module].css"
          }
      }]
  ]
}
```
2、示例加载一个`Button`组件：
```javascript
import Vue from 'vue'
import { Button } from 'starx-ui';

Vue.component('sButton', Button);
```