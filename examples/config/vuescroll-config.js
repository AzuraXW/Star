export default {
  vuescroll: {
    mode: 'native',
    sizeStrategy: 'number',
    detectResize: false
  },
  // 滚动条滚动的地方
  rail: {
    background: '#01a99a',
    opacity: 0,
    border: 'none',
    size: '6px',
    specifyBorderRadius: false,
    gutterOfEnds: null,
    gutterOfSide: '2px',
    keepShow: false
  },
  bar: {
    showDelay: 500,
    specifyBorderRadius: false,
    onlyShowBarOnScroll: true,
    keepShow: false,
    background: '#a8456b',
    opacity: 1,
    size: '6px',
    hoverStyle: false
  }
};
