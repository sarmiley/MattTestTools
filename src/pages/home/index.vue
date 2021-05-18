<template>
  <div id="home">
    <div>
      <input v-model="deepUrl" type="text">
      <button @click="goToUrl()">前往</button>
    </div>
    <div>
      <p>
        <a href="https://deeplinks-6ea47.web.app/fund/application?fundId=111111"
          >Deeplinks Demo for fund/application</a
        >
      </p>
      <p>
        <a href="https://deeplinks-6ea47.web.app/fund/myCompare?fundId=222222"
          >Deeplinks Demo for fund/myCompare</a
        >
      </p>
      <p>
        <a href="https://deeplinks-6ea47.web.app/fund/myWatch?fundId=333333"
          >Deeplinks Demo for fund/myWatch</a
        >
      </p>
      <p>
        <a
          href="https://deeplinks-6ea47.web.app/fund/purchaseMultiFundCIP?fundList=999999&fundList=888888&fundList=777777"
          >Deeplinks Demo for fund/purchaseMultiFundCIP</a
        >
      </p>
    </div>
    <div>
      <h1>_blank</h1>
      <p>
        <a
          href="https://deeplinks-6ea47.web.app/fund/application?fundId=111111"
          target="_blank"
          >Deeplinks Demo for fund/application</a
        >
      </p>
      <p>
        <a
          href="https://deeplinks-6ea47.web.app/fund/myCompare?fundId=222222"
          target="_blank"
          >Deeplinks Demo for fund/myCompare</a
        >
      </p>
      <p>
        <a
          href="https://deeplinks-6ea47.web.app/fund/myWatch?fundId=333333"
          target="_blank"
          >Deeplinks Demo for fund/myWatch</a
        >
      </p>
      <p>
        <a
          href="https://deeplinks-6ea47.web.app/fund/purchaseMultiFundCIP?fundList=999999&fundList=888888&fundList=777777"
          target="_blank"
        >
          Deeplinks Demo for fund/purchaseMultiFundCIP
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld'
import MenuBtn from '../../components/MenuBtn'
export default {
  name: 'home',
  components: {
    HelloWorld,
    MenuBtn
  },
  data () {
    return {
      deepUrl: ''
    }
  },
  methods: {
    goToUrl: function () {
      window.open(this.deepUrl, '_system')
    }
  }
}
</script>
