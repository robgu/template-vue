<template>
  <div>
    <h1>{{ msg }}</h1>
    <a v-link="{ name: 'vuex', params: { id: 123 }}">vuex - v-link</a>
    <button @click="goPage2">vuex - button</button>
    <button @click="changeMsgAsync">async 更改文字</button>
  </div>
</template>

<script>
const sleep = (interval) => {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
};

export default {
  el: '',
  props: ['msg2'],
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'home: 等待 1s async ready 会改变文字值'
    }
  },
  methods: {
    async goPage2() {

      // 下面 2 种方式是相同的, 无论哪种,都只能通过 url 传参数
      // https://github.com/vuejs/vue-router/blob/v0.7.11/docs/zh-cn/api/go.md
      // this.$router.go({
      //   path: '/vuex/cc',
      //   query: { a: 1 },
      // });
      this.$router.go({
        name: 'vuex',
        query: { a: 1 },
        params: { id: 'cc' }
      });
    },
    async changeMsgAsync() {
      // 测试 method 中 async 写法是可行的
      const { data } = await this.$http.get('smm-2017-01-03.json', { query: 1 });
      console.warn(data)
      this.msg = 'home: ' + data.date;
    }
  },
  computed: {},
  events: {},

  // 不建议使用 async, 即使使用了也不会 block 正常流程
  created() {
    console.warn('1. created before sleep')
    sleep(1000)
    console.warn('1. created after sleep')
  },

  // 不建议使用 async, 即使使用了也不会 block 正常流程
  beforeCompile() {
    console.warn('2. beforeCompile before sleep')
    sleep(1000)
    console.warn('2. beforeCompile after sleep')
  },

  // 不建议使用 async, 即使使用了也不会 block 正常流程
  compiled() {
    console.warn('3. compiled before sleep')
    sleep(1000)
    console.warn('3. compiled after sleep')
  },

  async ready() {
    console.warn('4. ready before sleep')
    await sleep(1000)
    this.msg = 'home: async finished';
    console.warn('4. ready after sleep')
  },

  // 不建议使用 async, 即使使用了也不会 block 正常流程
  beforeDestroy() {
    console.warn('5. beforeDestroy before sleep')
    sleep(1000)
    console.warn('5. beforeDestroy after sleep')
  },

  async destroyed() {
    console.warn('6. destroyed before sleep')
    await sleep(1000)
    console.warn('6. destroyed after sleep')
  }
}
</script>

<style lang="less" scoped>
body {
  font-family: Helvetica, sans-serif;
}

button,
a {
  display: block;
}
</style>
