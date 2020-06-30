<template>
  <div id="app">
    <div class="menu-wrap">
      <button class="menu" :class="{'active-menu': activeMenu == m.name}" v-for="(m, idx) in menus" :key="idx" @click="goMenu(m)">
        {{m.name}}
      </button>
    </div>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import routes from './router/routes'
const menus = routes.filter(route => !route.hideMenu && route.name).map(r => ({name: r.name}))

export default {
  name: 'App',
  data () {
    return {
      menus
    }
  },
  computed: {
    activeMenu () {
      return this.$route.name
    }
  },
  methods: {
    goMenu (menu) {
      if (!menu || menu.name === this.$route.name) { return }
      this.$router.push({name: menu.name})
    }
  },
}
</script>

<style>
body, html {
  margin: 0;
  border: none;
  padding: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: flex-start;
  height: 100%;
}
.menu-wrap {
  width: 160px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  background-color:whitesmoke;
}
.active-menu {
  background-color:slategrey;
  color: white;
}
.menu {
  width: 100%;
  border: none;
  border-bottom: slategrey 1px solid;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.content-wrap {
  flex-grow: 1;
  margin: 10px;
}
button {
  margin: 0;
  border: none;
  padding: 0;
  outline: none;
  background-color: transparent;
}
</style>
