<template>
  <div id="home">
    <div>
      <input v-model="deepUrl" type="text">
      <button @click="goToUrl()">前往</button>
    </div>
    <div>
      <button @click="checkPlatform()">check Platform</button>
    </div>
    <div>
      <p>
        <a href="scmbtw://fund/fundApplication?fundId=111111"
          >Deeplinks Demo for fund/application</a
        >
      </p>
      <p>
        <a href="scmbtw://fund/fundMyCompare?fundId=222222"
          >Deeplinks Demo for fund/myCompare</a
        >
      </p>
      <p>
        <a href="scmbtw://fund/fundMyWatch?fundId=333333"
          >Deeplinks Demo for fund/myWatch</a
        >
      </p>
      <p>
        <a
          href="scmbtw://fund/purchaseMultiFundCIP?fundList=999999&fundList=888888&fundList=777777"
          >Deeplinks Demo for fund/purchaseMultiFundCIP</a
        >
      </p>
    </div>
    <div>
      <h1>_blank</h1>
      <p>
        <a
          href="scmbtw://fund/fundApplication?fundId=111111"
          target="_blank"
          >Deeplinks Demo for fund/application</a
        >
      </p>
      <p>
        <a
          href="scmbtw://fund/fundMyCompare?fundId=222222"
          target="_blank"
          >Deeplinks Demo for fund/myCompare</a
        >
      </p>
      <p>
        <a
          href="scmbtw://fund/fundMyWatch?fundId=333333"
          target="_blank"
          >Deeplinks Demo for fund/myWatch</a
        >
      </p>
      <p>
        <a
          href="scmbtw://fund/purchaseMultiFundCIP?fundList=999999&fundList=888888&fundList=777777"
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
  mounted () {
    console.log(navigator.userAgent)
  },
  methods: {
    goToUrl: function () {
      window.open(this.deepUrl, '_system')
    },
    checkPlatform: function () {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        let loadDateTime = new Date()
        window.setTimeout(function () {
          let timeOutDateTime = new Date()
          if (timeOutDateTime - loadDateTime < 5000) {
            window.location = 'https://ebank.standardchartered.com.tw'
          } else {
            window.close()
          }
        },
        25)
        window.location = 'scmbtw://'
      } else if (navigator.userAgent.match(/android/i)) {
        let state = null
        try {
          state = window.open('scmbtw://', '_self')
          console.log('state: ', state)
          // window.location = 'scmbtw://'
        } catch (e) {
          console.log('error: ', e)
          // window.location = 'https://ebank.standardchartered.com.tw'
        }
        if (state) {
          window.close()
        } else {
          window.location = 'https://ebank.standardchartered.com.tw'
        }
      }
    }
  }
}
</script>
