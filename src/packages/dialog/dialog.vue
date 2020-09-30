<template>
<transition name="dialog-fade">
  <div class="starx-dialog-wrapper" v-show="visible" @click.self="handleClose">
    <div class="starx-dialog" :style="dislogStyles">
      <div class="starx-dialog-header">
        <slot name="title">
          <span class="starx-dialog-title">{{title}}</span>
        </slot>
        <button class="starx-dialog-headerbtn" @click="handleClose">
          <i class="fas fa-times fa-2x"></i>
        </button>
      </div>
      <div class="starx-dialog-body">
        <slot></slot>
      </div>
      <div class="starx-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: String,
    width: String,
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false);
    }
  },
  computed: {
    dislogStyles () {
      return {
        width: this.width,
        marginTop: this.top
      }
    }
  }
}
</script>
