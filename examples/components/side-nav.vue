<template>
  <div class="side-nav">
    <ul>
      <li class="nav-item" v-for="(item, index) in data" :key="index">
        <a>{{item.name}}</a>
        <ul v-if="item.children">
          <li class="nav-item" v-for="(navItem, index) in item.children" :key="index">
            <router-link :to="`${base}${navItem.path}`">{{navItem.name}}</router-link>
          </li>
        </ul>

        <template v-if="item.groups">
          <div class="nav-groups" v-for="(group, index) in item.groups" :key="index">
            <div class="nav-group__title">{{group.groupName}}</div>
            <ul v-if="group.list">
              <li class="nav-item" v-for="(navItem, index) in group.list">
                <router-link :to="`${base}${navItem.path}`">{{navItem.title}}</router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.side-nav{
  ul .nav-item > a{
    margin-top: 15px;
  }
  .nav-item{
    a{
      font-size: 16px;
      color: #333;
      // line-height: 40px;
      // height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: .15s ease-out;
      font-weight: bold;
    }
    .nav-item{
      a{
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
        &.router-link-exact-active{
          color: #409EFF;
        }
        &:hover{
          color: #409EFF;
        }
      }
    }
  }
  .nav-groups{
    .nav-group__title{
      font-size: 12px;
      color: #999;
      line-height: 26px;
      margin-top: 15px;
    }
  }
}
</style>
