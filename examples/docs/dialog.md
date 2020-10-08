## Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。
```html
<s-button type="primary" @click="visible = true">打开Dialog</s-button>

<s-dialog
title="Dialog 对话框"
width="30%"
:visible.sync="visible"
>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <s-button @click="visible = false">取 消</s-button>
    <s-button type="primary">确 定</s-button>
  </span>
</s-dialog>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    }
  };
</script>
```
:::

### 全屏
弹出一个全屏对话框

:::demo
```html
<s-button type="primary" @click="visible = true">打开全屏Dialog</s-button>

<s-dialog
title="全屏对话框"
:visible.sync="visible"
:fullscreen="true"
:appendToBody="true"
>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <s-button @click="visible = false">取 消</s-button>
    <s-button type="primary">确 定</s-button>
  </span>
</s-dialog>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    }
  };
</script>
```
:::

### 居中布局
标题和底部可水平居中

:::demo 将`center`设置为`true`即可使标题和底部居中。`center`仅影响标题和底部区域。`Dialog` 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。
```html
<s-button type="primary" @click="visible = true">打开Dialog</s-button>

<s-dialog
title="居中布局"
width="30%"
:visible.sync="visible"
center
>
  <span>内容默认不居中</span>
  <span slot="footer" class="dialog-footer">
    <s-button @click="visible = false">取 消</s-button>
    <s-button type="primary">确 定</s-button>
  </span>
</s-dialog>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    }
  };
</script>
```
:::

### beforeClose 的使用
介绍`beforeClose`回调函数的具体使用

:::demo 设置`beforeClose`回调函数，使用`done`函数关闭对话框，传入`true`或者不传入参数表示关闭该对话框，传入`false`或者不调用`done`函数表示不关闭该对话框，这个回调函数仅在点击关闭按钮和遮罩层时触发。通过改变`visible`属性的值引起的关闭均不触发该回调。
```html
<s-button type="primary" @click="visible = true">打开Dialog</s-button>

<s-dialog
title="beforeClose的使用"
:visible.sync="visible"
:beforeClose="beforeCloseCallback"
:destroyOnClose="true"
>
  <span>这是一段文字</span>
  <span slot="footer" class="dialog-footer">
    <s-button @click="visible = false">取 消</s-button>
    <s-button type="primary">确 定</s-button>
    <s-button type="warning" @click="isClose = !isClose">设置该对话框{{isClose ? '不可' : '可以'}}关闭</s-button>
  </span>
</s-dialog>

<script>
  export default {
    data () {
      return {
        visible: false,
        isClose: true,
        beforeCloseCallback: (done) => {
          done(this.isClose);
        }
      }
    },
  };
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | 是否显示 Dialog，支持 .sync 修饰符 | boolean | — | false |
| title     | Dialog 的标题，也可通过具名 slot （见下表）传入 | string    | — | — |
| width     | Dialog 的宽度 | string    | — | 50% |
| fullscreen     | 是否为全屏 Dialog | boolean    | — | false |
| top       | Dialog CSS 中的 margin-top 值 | string | — | 15vh |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| modal-append-to-body     | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上   | boolean   | — | true |
| append-to-body     | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true   | boolean   | — | false |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | — | true |
| custom-class      | Dialog 的自定义类名 | string    | — | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean    | — | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean    | — | true |
| show-close | 是否显示关闭按钮 | boolean    | — | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |
| center | 是否对头部和底部采用居中布局 | boolean | — | false |
| destroy-on-close | 关闭时销毁 Dialog 中的元素 | boolean | — | false |


### Slot
| name | 说明 |
|------|--------|
| — | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open  | Dialog 打开的回调 | — |
| opened  | Dialog 打开动画结束时的回调 | — |
| close  | Dialog 关闭的回调 | — |
| closed | Dialog 关闭动画结束时的回调 | — |
