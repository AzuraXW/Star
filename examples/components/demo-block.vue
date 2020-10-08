<template>
  <div class="demo-block" :class="{'hover': isHover}" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" :class="{'collapse': collapse}" ref="code" :style="{'height': collapseHeight}">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="demo-block-control" @click="handleCollapse">
      <i class="fas fa-fw" :class="{'fa-caret-down': !collapseHeight, 'fa-caret-up': collapseHeight}"></i>
      <transition name="control-text-fade">
        <span v-show="isHover">{{collapseHeight ? '收起' : '展开'}}代码</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      isHover: false,
      isControlHover: false,
      collapse: false,
      height: 0,
      collapseHeight: ''
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.height = this.$refs.code.offsetHeight;
      this.collapseHeight = 0;
    });
  },
  methods: {
    handleCollapse() {
      if (this.collapseHeight === 0) {
        this.collapseHeight = this.height + 'px';
      } else {
        this.collapseHeight = 0;
      }
    }
  },
  computed: {
  }
};
</script>

<style lang="scss">
.demo-block{
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .4s;
  &:hover{
    .demo-block-control i {
      transition: all .2s;
      transform: translateX(-40px);
    }
  }
  &.hover{
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .source{
    padding: 24px;
  }
  .meta {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    transition: height .4s;
    .description{
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
      p{
        margin: 0;
        line-height: 26px;
        font-size: 16px;
      }
    }
    .highlight code.hljs{
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
      background-color: transparent;
    }
  }
  .demo-block-control{
    border-top: 1px solid #eaeefb;
    height: 44px;
    left: 0;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    &:hover{
      color: #409eff;
      background-color: #f9fafc;
    }
    i{
      transition: all .6s;
      line-height: 44px;
    }
    span{
      line-height: 44px;

      position: absolute;
      transform: translateX(-30px);
    }
  }
}
.control-text-fade-enter-active{
  animation: run .3s;
}
.control-text-fade-leave-active{
  animation: run .3s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
    transform: translateX(0);
  } 100% {
    opacity: 1;
    transform: translateX(-30px);
  }
}
</style>
