export default {
  name: 'Icon',
  render: function(h) {
    return h(
      'span',
      {
        class: {
          'starx-icon': true
        }
      },
      [
        h('i',
          {
            class: {
              [`${this.classes}`]: true,
              'fa-spin': this.spin,
              [`${this.sizeCls}`]: true,
              'fa-pulse': this.pulse
            },
            style: this.styles
          }
        )
      ]
    );
  },
  props: {
    type: {
      type: String,
      required: false
    },
    custom: {
      type: String,
      required: false
    },
    spin: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      required: false
    },
    size: {
      type: String,
      required: false
    },
    sizetype: {
      type: String,
      required: false,
      default: 'default'
    },
    pulse: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    classes() {
      if (this.type) {
        return `fas fa-${this.type}`;
      }
      if (this.custom) {
        return this.custom;
      }
    },
    styles() {
      return {
        color: this.color,
        fontSize: this.size + 'px'
      };
    },
    sizeCls() {
      const iconSize = {
        medium: 'fa-lg',
        small: 'fa-sm',
        mini: 'fa-xs',
        default: 'fa-2x'
      };
      return iconSize[this.sizetype];
    }
  }
};
