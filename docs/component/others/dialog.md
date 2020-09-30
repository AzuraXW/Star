# Dialog 对话框

<template>
  <demo>
    <template slot="tip">
      这是一段提示文本
    </template>
    <template slot="source">
      <s-button type="primary" @click="visible = true">打开Dialog</s-button>
      <s-dialog
      title="温馨提示"
      width="30%"
      :visible.sync="visible"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <s-button>取 消</s-button>
          <s-button type="primary">确 定</s-button>
        </span>
      </s-dialog>
    </template>
<mdParse>
```
    <s-button type="primary" @click="visible = true">打开Dialog</s-button>
    <s-dialog
    title="温馨提示"
    width="30%"
    :visible.sync="visible"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <s-button>取 消</s-button>
        <s-button type="primary">确 定</s-button>
      </span>
    </s-dialog>
    <script>
      export default {
        name: 'Demo',
        data () {
          return  {
            isHover: false,
            isControlHover: false,
            collapse: false,
            height: 0
          }
        },
        mounted () {
          this.height = this.$refs.code.offsetHeight;
          this.$refs.code.style.height = '0';
        },
        methods: {
          handleCollapse () {
            const curHeight = this.$refs.code.clientHeight;
            console.log(curHeight);
            if (curHeight === 0) {
              this.$refs.code.style.height = this.height + 'px';
            } else {
              this.$refs.code.style.height = '0';
            }
          } 
        },
      }
    </script>
  ```
</mdParse>


  </demo>
</template>











<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>