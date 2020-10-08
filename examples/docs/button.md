## Button 按钮
常用的操作按钮。

### 一、基本用法
基本的按钮用法

:::demo 使用`type`、`plain`和`round`属性来定义 Button 的样式。
```html
<template>
  <div class="ex-container">
    <s-button>默认按钮</s-button>
    <s-button type="primary">主要按钮</s-button>
    <s-button type="success">成功按钮</s-button>
    <s-button type="info">信息按钮</s-button>
    <s-button type="warning">警告按钮</s-button>
    <s-button type="danger">危险按钮</s-button>
  </div>
  <div class="ex-container">
    <s-button plain>朴素按钮</s-button>
    <s-button type="primary" plain>主要按钮</s-button>
    <s-button type="success" plain>成功按钮</s-button>
    <s-button type="info" plain>信息按钮</s-button>
    <s-button type="warning" plain>警告按钮</s-button>
    <s-button type="danger" plain>危险按钮</s-button>
  </div>
  <div class="ex-container">
    <s-button round>圆角按钮</s-button>
    <s-button type="primary" round>主要按钮</s-button>
    <s-button type="success" round>成功按钮</s-button>
    <s-button type="info" round>信息按钮</s-button>
    <s-button type="warning" round>警告按钮</s-button>
    <s-button type="danger" round>危险按钮</s-button>
  </div>
</template>
```
:::

### 二、禁用按钮
按钮不可用状态。

:::demo
```html
<template>
  <div class="ex-container">
    <s-button disabled>默认按钮</s-button>
    <s-button type="primary" disabled>主要按钮</s-button>
    <s-button type="success" disabled>成功按钮</s-button>
    <s-button type="info" disabled>信息按钮</s-button>
    <s-button type="warning" disabled>警告按钮</s-button>
    <s-button type="danger" disabled>危险按钮</s-button>
  </div>
  <div class="ex-container">
    <s-button plain disabled>朴素按钮</s-button>
    <s-button type="primary" plain disabled>主要按钮</s-button>
    <s-button type="success" plain disabled>成功按钮</s-button>
    <s-button type="info" plain disabled>信息按钮</s-button>
    <s-button type="warning" plain disabled>警告按钮</s-button>
    <s-button type="danger" plain disabled>危险按钮</s-button>
  </div>
  <div class="ex-container">
    <s-button round disabled>圆角按钮</s-button>
    <s-button type="primary" round disabled>主要按钮</s-button>
    <s-button type="success" round disabled>成功按钮</s-button>
    <s-button type="info" round disabled>信息按钮</s-button>
    <s-button type="warning" round disabled>警告按钮</s-button>
    <s-button type="danger" round disabled>危险按钮</s-button>
  </div>
</template>
```
:::

### 三、不同大小

:::demo 
```html
<template>
  <div class="ex-container">
    <s-button>默认按钮</s-button>
    <s-button size="medium">中等按钮</s-button>
    <s-button size="small">小型按钮</s-button>
    <s-button size="mini">小型按钮</s-button>
  </div>
  <div class="ex-container">
    <s-button round>默认按钮</s-button>
    <s-button round size="medium">中等按钮</s-button>
    <s-button round size="small">小型按钮</s-button>
    <s-button round size="mini">小型按钮</s-button>
  </div>
</template>
```
:::

### 四、图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。  

:::demo 注意，`icon`属性必须是该组件库内置的图标，具体图标可以查找[Font Awesome 5.x](https://fa5.dashgame.com/#/%E5%9B%BE%E6%A0%87)
```html
<template>
<div class="ex-container">
   <s-button type="primary" icon="moon"></s-button>
   <s-button type="primary" icon="money-check"></s-button>
   <s-button type="primary" icon="network-wired"></s-button>
   <s-button type="primary" icon="share-alt"></s-button>
</div>
<div class="ex-container">
   <s-button type="info" icon="tools">设置</s-button>
   <s-button type="primary" icon="cart-plus">添加进购物车</s-button>
   <s-button type="info" icon="trash-alt">删除</s-button>
   <s-button type="primary" icon="search">搜索</s-button>
   <s-button type="info" afterIcon="redo">重置</s-button>
</div>
</template>
```
:::

### 五、加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。  
:::demo 要取消`loading`状态，只要设置`loading`属性为`false`即可。
```html
<template>
<div class="ex-container">
   <s-button type="primary" loading>加载中</s-button>
</div>
</template>
```
:::

### 六、按钮组
以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<s-button-group>`标签来嵌套你的按钮。
```html
<template>
  <div class="ex-container">
    <s-button-group>
      <s-button type="primary" icon="money-check"></s-button>
      <s-button type="primary" icon="network-wired"></s-button>
      <s-button type="primary" icon="share-alt"></s-button>
    </s-button-group>
  </div>
  <div class="ex-container">
    <s-button-group>
      <s-button type="info" icon="chevron-left">上一页</s-button>
      <s-button type="info" afterIcon="chevron-right">下一页</s-button>
    </s-button-group>
  </div>
</template>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| afterIcon  | 文字内容之后的图标类名 | string   |  —  |  —  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |