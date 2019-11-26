<template>
  <div id="app">
    <TplNav />
    <router-view/>
    <TplFooter />
  </div>
</template>

<script>
import TplNav from './components/tpl_nav'
import TplFooter from './components/tpl_footer'

export default {
  name: 'App',
  components: {
    TplNav,
    TplFooter
  }
}
</script>

<style lang="scss">
  body {
    color: #444;
    background-color: #fff !important;
  }
  #app {
    min-width: 1080px;
  }
  img {
    width: 100%;
  }
  .content {
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 30px;
    box-sizing: content-box;
  }
  .title {
    font-size: 20px;
  }
  .card-list {
    display: flex;
    .card-item {
      flex: 1;
      width: 25%;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
    .card-img {
      width: 100%;
    }
    .card-body {
      padding: 10px;
    }
    .card-body-title {
      font-size: 18px;
    }
    .card-body-desc {
      font-size: 13px;
      line-height: 1.3;
      color: #999;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
    }
  }
  .mu-bottom-item-wrapper {
    align-items: center;
    align-content: center;
    align-self: center;
    display: inline-flex;
    justify-content: center;
  }
  .amt-shadow {
    transition: .3s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 3px 10px 0px #888;
    }
  }
  .flex {
    display: flex;
  }
  .bunch {
    width: 250px;
    height: 500px;
    display: inline-block;
    margin-right: 20px;
  }
  ul, li {
    list-style: none;
  }
  .mu-bottom-item-wrapper {
    display: flex !important;
  }
  .mu-bottom-item-active .mu-bottom-item-text {
    align-self: center;
  }
</style>
