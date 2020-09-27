<template>
  <button 
  class="starx-button" 
  :class="{
    [`starx-button-${type}`]: true,
    'is-plain': plain,
    'is-round': round
    }"
  type="button">
    <span>
      <slot></slot>
    </span>
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
    }
  }
}
</script>

