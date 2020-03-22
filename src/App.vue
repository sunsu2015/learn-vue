<template>
  <div id="app">
    <span v-if='showName'>{{name}}</span>
    <input type="text" v-model="newGoodName">
    <input type="text" v-model="newGoodPrice"><button @click="addGood">增加产品</button>
    <ul>
      <li v-for="(good, i) in goods" :key="good.id">
        <span>{{i + 1}}</span>
        <span>{{good.name}}</span>
        <span>{{good.price}}</span>
        <button @click="addCart(good)">加入购物车</button>
      </li>
    </ul>
    <hello-world></hello-world>
    <cart :name="'购物车'"></cart>
    <form-test :title="title" @eventTest="handleEvent"></form-test>

    <win>
      <template slot="head">head</template>
      content
      <template slot="foot">foot</template>
    </win>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart'
import FormTest from './components/FormTest'
import Win from './components/Window'
import axios from 'axios'

export default {
  name: 'app',
  provide() {
    return {
      someValue: 'someValue'
    }
  },
  data() {
    return {
      name: 'hello',
      showName: false,
      goods: [],
      newGoodName: '',
      newGoodPrice: '',
      cart: [],
      title: 'element form',
      ruleForm: {
        name: '',
        pwd: ''
      }
    }
  },
  async created() {
    setTimeout(()=> {
      this.showName = true;
    }, 3000);
    const response = await axios.get('/api/goods');
    this.goods = response.data.list;
  },
  methods: {
    addGood() {
      if (this.newGoodName && this.newGoodPrice) {
        this.goods.push({
          id: this.goods.length + 1,
          name: this.newGoodName,
          price: this.newGoodPrice
        });
      }
    },
    addCart(good) {
      this.$root.$emit('addCart', good);
    },
    handleEvent(event) {
      window.console.log(event);
    }
  },
  components: {
    HelloWorld,
    Cart,
    FormTest,
    Win
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
