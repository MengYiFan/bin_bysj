<template>
  <div class="tpl_nav-container">
    <div class="content">
      <img class="logo" src="../assets/logo.png" />
      <div class="nav">
        <mu-bottom-nav>
          <mu-bottom-nav-item title="首页" to="/home"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="大咖秀" to="/start"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="远方" to="/distance"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="攻略" to="strategy"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="出行装备" to="/equipment"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="论坛" to="/bbs"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .tpl_nav-container {
    padding: 6px 30px;
    background-color: #fff;
    .content {
      padding: 0;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 50px;
      }
      .nav {
        display: inline-flex;
        flex: 1;
        justify-content: flex-end;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }
  }
</style>
