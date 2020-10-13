## Input 输入框
通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它**总会显示 Vue 绑定值**。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。
:::

### 基础用法

:::demo
```html
<template>
  <s-input v-model="input" placeholder="请输入内容"/>
</template>
<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<template>
  <s-input v-model="input"  placeholder="请输入内容" disabled/>
</template>
<script>
  export default {
    data () {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 可清空

:::demo 使用`clearable`属性即可得到一个可清空的输入框
```html
<template>
  <s-input v-model="input"  placeholder="请输入内容" clearable/>
</template>
<script>
  export default {
    data () {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 密码框

:::demo 使用`show-password`属性即可得到一个可切换显示隐藏的密码框
```html
<template>
  <s-input v-model="input"  placeholder="请输入密码" show-password/>
</template>
<script>
  export default {
    data () {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 带Icon的输入框
带有图标标记输入类型
:::demo 可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。

```html
<template>
  <div style="margin-top:15px; display:flex; align-items: center; width:500px; justify-content:space-between">
    slots方式：
    <s-input v-model="input" placeholder="请输入内容">
      <template slot="prefix">
        <i class="fas fa-graduation-cap"></i>
      </template>
    </s-input>
    <s-input v-model="input2" placeholder="请输入内容">
      <template slot="suffix">
        <i class="fas fa-graduation-cap"></i>
      </template>
    </s-input>
  </div>

  <div style="margin-top:15px; display:flex; align-items: center; width:500px; justify-content:space-between">
    属性方式：
    <s-input v-model="input3" placeholder="请输入内容" prefixIcon="far fa-envelope-open"/>
    <s-input v-model="input4" placeholder="请输入内容" suffixIcon="fas fa-microphone-alt"/>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        input: '',
        input2: '',
        input3: '',
        input4: ''
      }
    }
  }
</script>
```
:::

### 文本域
用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`。
:::demo 
```html
<template>
  <div style="margin-top:15px;">
    <s-input type="textarea" v-model="textarea" placeholder="请输入内容" />
  </div>

</template>
<script>
  export default {
    data () {
      return {
        textarea: '',
      }
    }
  }
</script>
```
:::


### 可自适应文本高度的文本域
通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。
:::demo
```html
<template>
  <div style="margin-top:15px;">
    <s-input type="textarea"
      v-model="textarea" 
      placeholder="请输入内容"
      :autosize="{minRows: 4, maxRows: 8}"
    />
  </div>
  <div style="margin-top:15px;">
    <s-input type="textarea" 
      v-model="textarea2" 
      placeholder="请输入内容"
      autosize
      resize="none"
    />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        textarea: '',
        textarea2: '',
      }
    }
  }
</script>
```
:::


### 尺寸
:::demo 可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。

```html
<template>
  <div style="margin-top:15px; display:flex; align-items: flex-start;justify-content:space-between">
    <s-input v-model="input" placeholder="请输入内容">
      <template slot="prefix">
        <i class="fas fa-graduation-cap"></i>
      </template>
    </s-input>
    <s-input v-model="input2" placeholder="请输入内容" size="medium">
      <template slot="prefix">
        <i class="fas fa-graduation-cap"></i>
      </template>
    </s-input>
    <s-input v-model="input3" placeholder="请输入内容" size="small">
      <template slot="prefix">
        <i class="fas fa-graduation-cap"></i>
      </template>
    </s-input>
    <s-input v-model="input4" placeholder="请输入内容" size="mini">
      <template slot="prefix">
        <i class="fas fa-graduation-cap"></i>
      </template>
    </s-input>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        input: '',
        input2: '',
        input3: '',
        input4: ''
      }
    }
  }
</script>
```
:::

### 输入长度限制

:::demo `maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 `Javascript` 的字符串长度统计的。对于类型为 `text` 或 `textarea` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。当 `type` 为 `text` 时，原始字符长度大于限定字符长度时输入框会换一种样式。
```html
<template>
  <s-input v-model="input" placeholder="请输入内容" maxlength="10" show-word-limit/>
  <div style="margin-top:20px">
    <s-input v-model="input2" placeholder="请输入内容" maxlength="10" show-word-limit/>
  </div>
  <div style="margin-top:20px">
    <s-input type="textarea" 
    v-model="textarea" 
    placeholder="请输入内容" 
    maxlength="350" 
    show-word-limit 
    :autosize="autosize"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        input: '66666666666',
        input2: '',
        textarea: '',
        autosize: {
          minRows: 2,
          maxRows: null
        }
      }
    }
  }
</script>
```
:::

### 复合型输入框
可前置或后置元素，一般为标签或按钮

:::demo 可通过 slot 来指定在 input 中前置或者后置内容。
```html
<template>
  <div style="margin-top:15px">
    <s-input v-model="input"  placeholder="请输入内容">
      <template slot="prepend">Https://</template>
    </s-input>
  </div>

  <div style="margin-top:15px">
    <s-input v-model="input2" placeholder="请输入内容" suffixIcon="fas fa-internet-explorer">
      <template slot="append">.com</template>
    </s-input>
  </div>

  <div style="margin-top:15px">
    <s-input v-model="input3"  placeholder="请输入内容">
      <template slot="append">
        <s-button icon="search-location"></s-button>
      </template>
    </s-input>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        input: '',
        input2: '',
        input3: ''
      }
    }
  }
</script>
```
:::


### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 原生属性，最大输入长度      | number          |  —  | — |
| minlength     | 原生属性，最小输入长度      | number          | — | — |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean    |  —  | false |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | medium / small / mini  | — |
| prefix-icon   | 输入框头部图标    | string          | — | — |
| suffix-icon   | 输入框尾部图标    | string          | — | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean / object | — |  false   |
| autocomplete | 原生属性，自动补全 | string | on, off | off |
| auto-complete | 下个主版本弃用 | string | on, off | off |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| resize | 控制是否能被用户缩放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |
| form | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |
| tabindex | 输入框的tabindex | string | - | - |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |

### Input Slots
| name | 说明 |
|------|--------|
| prefix | 输入框头部内容，只对 `type="text"` 有效 |
| suffix | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append | 输入框后置内容，只对 `type="text"` 有效 |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |

### Input Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — |
