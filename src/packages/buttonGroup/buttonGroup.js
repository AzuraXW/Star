export default {
  name: 'buttonGroup',
  render: function(h) {
    return h('div', {
      class: {
        'starx-button-group': true
      }
    }, this.$slots.default);
  }
};
