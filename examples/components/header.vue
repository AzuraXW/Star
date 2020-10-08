<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/logo.png" alt="">
          <span class="text">StarX</span>
        </router-link>
      </div>
      <ul class="nav">
        <li><router-link to="/component">组件</router-link></li>
        <li><router-link to="/theme">主题</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header-wrapper{
  background-color: #5cb3cc;
  // border: 1px solid #DCDFE6;
  padding: 15px 0;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
      img{
        max-width: 60px;
        vertical-align: middle;
      }
      a{
        color: #fff353;
        font-size: 28px;
        font-weight: bolder;
        letter-spacing: 1px;
      }
    }
    .nav{
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      li{
        a{
          display: block;
          height: 100%;
          padding: 15px;
          font-size: 18px;
          box-sizing: border-box;
          color: #fffcd9;
          &.router-link-active{
            color: #fff353;
          }
          &:hover{
            color: #fff353;
          }
        }
      }
    }
  }
}
</style>
