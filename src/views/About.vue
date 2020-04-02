<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>This is params: {{$route.params}}</h1>
    <h1>This is query: {{$route.query}}</h1>
    <h1>This is props: {{foo}}</h1>
    <h1>This is vuex store.state.count: {{$store.state.count}} | {{ count }} | {{countAlias}}</h1>
    <h1>This is vuex store.state.amount: {{ amount }}</h1>
    <h1>This is vuex store.getters.anotherCount: {{ anotherCount }}</h1>
    <button @click="addCount">增加count</button>
  </div>
</template>


<script>
  import { mapState, mapGetters } from 'vuex';
  export default {
    created() {
      window.console.info(this.$route.params.param1);
    },
    props: {
      foo: {
        type: String
      },
    },
    methods: {
      addCount() {
        this.$store.commit('increase');
      }
    },
    computed: {
      ...mapState(['count', 'amount']),
      ...mapGetters(['anotherCount'])
    },
    // computed: mapState(['count', 'amount']),
    // computed: mapState({
    //   count: state => state.count,
    //   countAlias: 'count',
    //   amount: state => state.amount
    // })
  }
</script>

<style lang="scss" scoped>

</style>