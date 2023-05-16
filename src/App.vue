<template>
  <div id="app">
    <div class="content">
      <div class="content-header">
        <menu-item :items="menuData"/>
        <div class="update-time-area">（Last Update: 2023/05/16）</div>
      </div>
      <div class="content-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from './components/MenuItem/index.vue'
export default {
  name: 'App',
  components: {
    MenuItem
  },
  data () {
    return {
      menuData: [
        { path: '/home', name: 'home' },
        { path: '/deeplinkHelper', name: 'deeplinkHelper' }
      ]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.side {
  width: 6.875vw;
  height: 100vh;
  float: left;
  background-color: #F0F8FF;
}

.content-header {
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgb(197, 224, 255);
}

.update-time-area {
  text-align: right;
  float: right;
  font-size: 0.3em;
}

</style>
