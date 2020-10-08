<template>
<transition 
name="dialog-fade"
@after-enter="afterEnter"
@after-leave="afterLeave">
  <div class="starx-dialog__wrapper" v-show="visible" @click.self="handleWrapperClose">
    <div
    :style="dislogStyles"
    :class="['starx-dialog', {'is-fullscreen': fullscreen, 'starx-dialog--center': center}, customClass]"
    :key="key"
    >
      <div class="starx-dialog__header">
        <slot name="title">
          <span class="starx-dialog__title">{{title}}</span>
        </slot>
        <button class="starx-dialog__headerbtn" @click="handleClose" v-if="showClose">
          <i class="fas fa-times fa-2x"></i>
        </button>
      </div>
      <div class="starx-dialog__body">
        <slot></slot>
      </div>
      <div class="starx-dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import Popup from '../../utils/popup';

export default {
  name: 'Dialog',
  mixins: [Popup],
  props: {
    title: String,
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    customClass: String,
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    beforeClose: Function,
    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closed: false,
      key: 0
    };
  },
  methods: {
    handleClose() {
      if (this.beforeClose instanceof Function) {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    handleWrapperClose() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.closed = true;
        if (!this.closed) this.$emit('close');
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++;
            console.log(this.key);
          });
        }
      }
    }
  },
  computed: {
    dislogStyles() {
      if (this.fullscreen) return;
      return {
        width: this.width,
        marginTop: this.top
      };
    }
  },
  mounted() {
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }
  },
  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
