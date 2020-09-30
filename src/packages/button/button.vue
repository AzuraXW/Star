<template>
  <button 
  class="starx-button" 
  :class="{
    [`starx-button-${type}`]: true,
    'is-plain': plain,
    'is-round': round,
    'is-disable': disabled,
    [`${size}`]: size !== 'default',
    'is-circle': circle,
    'is-loading': loading
    }"
  type="button"
  :disabled="disabled"
  @click="$emit('click', $event)"
  >
    <i class="fa-sm fa-fw starx-button-icon" :class="btnIconCls" v-if="icon || loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <i class="fa-sm fa-fw starx-button-icon" :class="{[`fas fa-${afterIcon}`]: true}" v-if="afterIcon"></i>
  </button>
</template>

<script>
import { oneOf } from '../../mixins/assits';

export default {
  name: 'Button',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'danger']);
      },
      default: 'default',
      type: String
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator (value) {
        return oneOf(value, ['default', 'medium', 'small', 'mini']);
      },
      type: String,
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    afterIcon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnIconCls () {
      if (this.loading) {
        return {
          "fas fa-spinner fa-pulse": true
        }
      } else {
        return {
          [`fas fa-${this.icon}`]: true
        }
      }
    }
  }
}
</script>

