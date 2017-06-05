<template>
  <div id="pageHeader">
    <img id="logo" src="../assets/atmosphere.svg">
  </div>
</template>

<script>
  export default {
    name: 'page-header'
  }
</script>

<style scoped>
  #pageHeader {
    background: #264876;
    height: 60px;
    width: 100%;
    padding: 5px 0 0 10px;
  }

  #logo {
    height: 50px;
  }
</style>