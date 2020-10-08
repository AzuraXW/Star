<template>
  <div class="footer-nav">
    <span
      v-if="leftNav"
      class="footer-nav-link footer-nav-link-left"
      @click="handleNavClick('prev')"
    >
      <i class="fa-sm fa-fw starx-button-icon fas fa-chevron-left"></i>
      {{leftNav.title || leftNav.name}}
    </span>
    <span
      v-if="rightNav"
      class="footer-nav-link  footer-nav-link-right"
      @click="handleNavClick('next')"
    >
      {{rightNav.title || rightNav.name}}
      <i class="fa-sm fa-fw starx-button-icon fas fa-chevron-right"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: null,
      nav: [],
      currentIndex: 0,
      leftNav: null,
      rightNav: null
    };
  },
  props: {
    data: Array
  },
  created() {
    this.setNav();
    this.updateNav();
  },
  methods: {
    setNav() {
      this.nav = [];
      this.data.forEach(item => {
        item.children && this.nav.push(...item.children);
        if (item.groups) {
          item.groups.forEach(nav => {
            this.nav.push(...nav.list);
          });
        }
      });
    },
    updateNav() {
      this.currentComponent = '/' + this.$route.path.split('/')[2];
      this.currentIndex = this.nav.findIndex(item => {
        return item.path === this.currentComponent;
      });
      this.leftNav = this.nav[this.currentIndex - 1];
      this.rightNav = this.nav[this.currentIndex + 1];
    },
    handleNavClick(direction) {
      this.$router.push(`/component${direction === 'prev' ? this.leftNav.path : this.rightNav.path}`);
    }
  },
  watch: {
    '$route.path': {
      handler() {
        this.setNav();
        this.updateNav();
      }
    }
  }
};
</script>

<style lang="scss">
.footer-nav{
  padding: 40px 0;
  color: #333;
  font-size: 14px;
  &::after{
    content: '';
    display: block;
    clear: both;
  }
  .footer-nav-link {
    cursor: pointer;
    transition: .3s;
    
    & i {
      transition: .3s;
    }
    &:hover {
      color: #409EFF;
      
      & i {
        color: #409EFF;
      }
    }
  }
  .footer-nav-link-left {
    float: left;
  }
  .footer-nav-link-right{
    float: right;
  }
}
</style>
