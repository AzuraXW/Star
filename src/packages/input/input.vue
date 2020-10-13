<template>
  <div :class="[
    type === 'text' ? 'starx-input' : 'starx-textarea',
    size ? 'starx-input--' + size : '',
    {
      'starx-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword,
      'starx-input--prefix': $slots.prefix || prefixIcon,
      'is-disabled': inputDisabled,
      'is-exceed': inputExceed,
      'starx-input-group': $slots.prepend || $slots.append,
      'starx-input-group--prepend': $slots.prepend,
      'starx-input-group--append': $slots.append
    }
  ]"
  @mouseenter="hovering = true"
  @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <div class="starx-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>

      <input
      ref="input"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :value="value"
      :placeholder="placeholder"
      :disabled="inputDisabled"
      v-bind="$attrs"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :class="[
        'starx-input__inner'
      ]"
      />

      <!-- 前置图标 -->
      <div class="starx-input__prefix">
        <span class="starx-input__icon" v-if="$slots.prefix">
          <slot name="prefix">
          </slot>
        </span>
        <i 
        class="starx-input__icon"
        :class="prefixIcon"
        v-else
        ></i>
      </div>

      <span class="starx-input__suffix" v-if="suffixVisible">
        <span class="starx-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !showWordLimit">
            <span class="starx-input__icon" v-if="$slots.suffix">
              <slot name="suffix">
              </slot>
            </span>
            <i 
            class="starx-input__icon" 
            :class="suffixIcon"
            v-else
            ></i>
          </template>

          <i class="fas fa-times-circle starx-input__clear starx-input__icon"
            v-if="showClear"
            @mousedown.prevent
            @click="clear"
          ></i>
          
          <i v-if="showPwdVisible" 
          :class="[
          'fas',
          'starx-input__icon',
          'starx-input__clear',
          passwordVisible ? 'fa-eye' : 'fa-eye-slash'
          ]"
          @click="handlePasswordVisible"
          >
          </i>

          <span v-if="isWordLimitVisible" class="starx-input__count">
            <span class="starx-input__count-inner">{{textLength}}/{{upperLimit}}</span>
          </span>
        </span>
      </span>

      <div class="starx-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>

    <textarea
      v-else
      :tabindex="tabindex"
      :placeholder="placeholder"
      class="starx-textarea__inner"
      :style="textareaStyle"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    >
    </textarea>
    <span v-if="isWordLimitVisible && type === 'textarea'" class="starx-input__count">
      {{textLength}}/{{upperLimit}}
    </span>
  </div>
</template>

<script>
import { isKorean } from '../../utils/shared';
import calcTextareaHeight from './calcTextareaHeight';
import emitter from '../../utils/mixins/emitter';

export default {
  mixins: [emitter],

  inheritAttrs: false,
  name: 'SInput',
  componentName: 'SInput',

  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    placeholder: String,
    clearable: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    showPassword: Boolean,
    showWordLimit: Boolean,
    prefixIcon: String,
    suffixIcon: String,
    tabindex: String,
    resize: String,
    autosize: {
      type: [Object, Boolean],
      default: false
    },
    size: String
  },

  data() {
    return {
      textareaCalcStyle: {},
      focused: false,
      hovering: false,
      passwordVisible: false,
      isComposing: false
    };
  },

  mounted() {
    this.resizeTextarea();
    this.updateIconOffset();
  },

  watch: {
    value(val) {
      this.$nextTick(this.resizeTextarea);
    },
    type(val) {
      this.$nextTick(() => {
        this.resizeTextarea();
        this.updateIconOffset();
      });
    }
  },

  methods: {
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    select() {
      this.getInput().select();
    },
    handleInput(e) {
      if (this.isComposing) return;
      this.$emit('input', e.target.value);
    },
    handleFocus(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    handleChange(e) {
      this.$emit('change', e.target.value);
    },
    handleBlur(e) {
      this.focused = false;
      this.$emit('blur', e);
    },
    handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionUpdate(e) {
      const text = e.target.value;
      const lastCharacter = text[text.length - 1] || '';
      this.isComposing = !isKorean(lastCharacter);
    },
    handleCompositionEnd(e) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(e);
      }
    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
      this.focus();
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    resizeTextarea() {
      const { autosize, type } = this;
      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea).minHeight;
        return;
      }

      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    calcIconOffset(place) {
      let elList = [].slice.call(this.$el.querySelectorAll(`.starx-input__${place}`) || []);
      if (!elList.length) return;
      let el = null;

      for (let i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i];
          break;
        }
      }

      if (!el) return;

      const pendantMap = {
        'suffix': 'append',
        'prefix': 'prepend'
      };
      const pendant = pendantMap[place];
      if (this.$slots[pendant]) {
        el.style.transform =
        `translate(${pendant === 'append' ? '-' : ''}
        ${this.$el.querySelector(`.starx-input-group__${pendant}`).offsetWidth}px)`;
      } else {
        el.removeAttribute('style');
      }
    },
    updateIconOffset() {
      this.calcIconOffset('suffix');
      this.calcIconOffset('prefix');
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    }
  },

  computed: {
    nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    showClear() {
      return this.clearable &&
      this.nativeInputValue &&
      !this.readonly &&
      !this.disabled &&
      (this.focused || this.hovering);
    },
    inputDisabled() {
      return this.disabled;
    },
    upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length;
      }

      return (this.value || '').length;
    },
    textareaStyle() {
      return Object.assign(
        this.textareaCalcStyle,
        {
          'resize': this.resize,
          'padding': this.isWordLimitVisible ? '5px 15px 20px' : '5px 15px'
        }
      );
    },
    isWordLimitVisible() {
      return this.showWordLimit &&
      (this.type === 'text' || this.type === 'textarea') &&
      this.$attrs.maxlength &&
      !this.disabled &&
      !this.showPassword &&
      !this.readonly;
    },
    showPwdVisible() {
      return this.showPassword &&
      !this.inputDisabled &&
      !this.readonly &&
      (this.focused || !!this.nativeInputValue);
    },
    suffixVisible() {
      return this.$slots.suffix || this.showClear || this.showPwdVisible || this.isWordLimitVisible || this.suffixIcon;
    },
    inputExceed() {
      return this.isWordLimitVisible &&
        (this.textLength > this.upperLimit);
    }
  }
};
</script>
