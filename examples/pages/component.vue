<template>
  <div class="page-container">
    <vueScroll>
      <div class="container">
        <div class="slidebar">
          <vueScroll>
            <side-nav :data="data" base="/component"></side-nav>
          </vueScroll>
        </div>
        <div class="page-component">
          <router-view></router-view>
          <footer-nav :data="data"></footer-nav>
        </div>
      </div>
    </vueScroll>
  </div>
</template>

<script>
import sideNav from '../components/side-nav';
import navConfig from '../nav.config.json';
import footerNav from '../components/footer-nav';
export default {
  components: {
    sideNav,
    footerNav
  },
  computed: {
    data() {
      return navConfig.nav;
    }
  }
};
</script>

<style lang="scss">
.page-container{
  height: 100%;
  overflow: hidden;
  .container{
    position: relative;
    .slidebar{
      /deep/ .__view{
        overflow: auto;
      }
      width: 245px;
      position: fixed;
      z-index: 999;
      top: 0;
      bottom: 0;
      overflow: hidden;
      height: 100%;
      margin-top: 90px;
    }
    .page-component{
      overflow: auto;
      padding-left: 270px;
      padding-bottom: 100px;
      box-sizing: border-box;
      overflow: hidden;
      p code{
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
      h1, h2, h3, h4, h5{
        font-weight: normal;
        color: #1f2f3d;
        &:hover{
          .header-anchor{
            opacity: .6;
          }
        }
        .header-anchor{
          float: left;
          margin-left: -20px;
          opacity: 0;
          cursor: pointer;
          font-size: 27px;
        }
      }
      h2{
        font-size: 28px;
      }
      h3{
        margin: 55px 0 20px;
        font-size: 22px;
      }
      p{
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
      }
      .hljs{
        line-height: 1.8;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        font-size: 12px;
        padding: 18px 24px;
        background-color: #fafafa;
        border: solid 1px #eaeefb;
        margin-bottom: 25px;
        border-radius: 4px;
        -webkit-font-smoothing: auto;
      }
      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;

        strong {
          font-weight: normal;
        }

        td, th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }

        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }

        td {
          color: #606266;
        }

        th:first-child, td:first-child {
          padding-left: 10px;
        }
      }
    }
  }
}

</style>
