<template>
  <div id="app">
    <Header></Header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';
export default {
  data() {
    return {
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#app{
  height: 100%;
  .main-cnt{
    height: 100%;
    overflow: hidden;
  }
}
</style>
