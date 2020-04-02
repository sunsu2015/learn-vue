<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/home/about/bbb?test=1">关于</router-link>
    <router-link to="/home/about2/aaa">关于2</router-link>
    <router-link to="/home/test/1/baz?foo=bar">Test</router-link>
    <button @click="gotoAbout()">跳转到关于页面</button>
    <button @click="gotoAbout1()">跳转到关于页面</button>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    gotoAbout() {
      this.$router.push({name: 'about', params: {param1: 'vuejs'}, query: {test: 1}});
    },
    gotoAbout1() {
      this.$router.push({name: 'about1'});
    },
    beforeRouteEnter(to, from, next) {
      next();
    }
  },
}
</script>