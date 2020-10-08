import PopupManager from './popup-manager';
import getScrollWidth from '../scrollbar-width';
import { addClass, removeClass, hasClass } from '../dom';

let idSeed = 1;
let scrollWidth;

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: true
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },

  beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  },

  beforeDestroy() {
    PopupManager.deregister(this._popupId);
    PopupManager.closeModal(this._popupId);
  },

  data() {
    return {
      opened: false,
      rendered: false
    };
  },

  watch: {
    visible(val) {
      if (val) {
        if (this._opening) return;
        if (this.fullscreen) return;
        if (!this.rendered) {
          this.rendered = true;
          this.$nextTick(() => {
            this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },
  methods: {
    open(options) {
      if (!this.rendered) {
        this.rendered = true;
      }

      const props = Object.assign({}, this.$props || this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);
      const openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(() => {
          this._openTimer = null;
          this.deOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },

    doOpen(props) {
      if (this.opened) return;
      this._opening = true;
      const dom = this.$el;

      const modal = props.modal;
      const zIndex = props.zIndex;
      if (zIndex) {
        PopupManager.zIndex = zIndex;
      }

      if (modal) {
        if (this._closeing) {
          PopupManager.closeModal(this._popupId);
          this._closeing = false;
        }
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);

        if (props.lockScroll) {
          this.withoutHiddenClass = !hasClass(document.body, 'starx-popup-parent--hidden');
          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.computedBodyPaddingRight = parseInt(document.body.paddingRight, 10);
          }

          scrollWidth = getScrollWidth();
          let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          let bodyOverflowY = document.body.overflowY;
          if (scrollWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + 'px';
          }
          addClass(document.body, 'starx-popup-parent--hidden');
        }

        if (dom.style.position === 'static') {
          dom.style.position = 'absolute';
        }

        dom.style.zIndex = PopupManager.nextZIndex();
        this.opened = true;
        this.onOpen && this.onOpen();
        this.doAfterOpen();
      }
    },
    doAfterOpen() {
      this._opening = false;
    },

    close() {
      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }

      clearTimeout(this._closeTimer);

      const closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(() => {
          this._closeTimer = null;
          this.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },

    doClose() {
      this._closeing = true;
      this.onClose && this.onClose();
      this.opened = false;
      this.doafterClose();

      if (this.lockScroll) {
        setTimeout(() => {
          this.restoryBodyStyle();
        }, 300);
      }
    },

    doafterClose() {
      PopupManager.closeModal(this._popupId);
      this._closeing = false;
    },

    restoryBodyStyle() {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight;
        removeClass(document.body, 'starx-popup-parent--hidden');
      }
    }
  }
};
