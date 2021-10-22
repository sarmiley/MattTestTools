<template>
  <div>
    <div class="prod-body">
      <div class="prod-search-box">
         <div class="full-url">
            {{ fullUrl }}
        </div>
        <div>
          <label>
            Host：
          </label>
          <select v-model="domain">
            <option value="https://eappointment.standardchartered.com.tw/scb/public/">eappointment</option>
            <option value="https://localhost:8080/public/">localhost</option>
          </select>
           <label>routeName</label>
          <input v-model="routeName" type="text">
          <label>path：</label>
          <input v-model="path" type="text">
        </div>
      </div>
      <div class="btn-section">
        <button class="btn btn-link" @click="goToUrlWithNewTab()">開新分頁前往</button>
        <button class="btn btn-link" @click="goToUrlbySelf()">原頁轉導</button>
      </div>
    </div>
    <div class="prod-body">
      <div class="prod-search-box2">
        <label>Custom URL：</label>
        <input v-model="customUrl" type="text">
      </div>
      <div class="btn-section">
        <button class="btn btn-link" @click="goToUrlWithNewTab(customUrl)">開新分頁前往</button>
        <button class="btn btn-link" @click="goToUrlbySelf(customUrl)">原頁轉導</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      customUrl: '',
      path: '',
      routeName: '',
      domain: 'https://eappointment.standardchartered.com.tw/scb/public/'
    }
  },
  mounted () {
    console.log(navigator.userAgent)
  },
  computed: {
    fullUrl: function () {
      let url = this.domain + 'redirectCenter' + '?routeName=' + this.routeName
      if (this.path) {
        return url + '&' + this.path
      } else {
        return url
      }
    }
  },
  methods: {
    goToUrlbySelf: function (url) {
      if (url) {
        window.open(url, '_self')
      } else {
        window.open(this.fullUrl, '_self')
      }
    },
    goToUrlWithNewTab: function (url) {
      if (url) {
        window.open(url, '_system')
      } else {
        window.open(this.fullUrl, '_system')
      }
    }
  }
}
</script>
<style scoped>
.prod-body {
  width: 75%;
  background: #fff;
  margin: 50px auto 40px auto;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.prod-list {
  margin: 20px auto;
  position: relative;
  z-index: 2;
}

.prod-list-item-price {
  float: right;
}

.prod-search-text {
  font-size: 0.8em;
  color: #999;
  margin: 5px;
}

.prod-search-box input, select{
  text-align: center;
  margin: 0 15px 0 0;
  width: 15%;
  font-size: 24px;
  line-height: 1em;
  border: 0;
  color: inherit;
  padding: 6px 15px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.prod-search-box2 input {
  text-align: center;
  margin: 0 15px 0 0;
  width: 80%;
  font-size: 24px;
  line-height: 1em;
  border: 0;
  color: inherit;
  padding: 6px 15px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.btn-section {
  margin: 10px auto;
}

.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn-link {
    font-weight: 400;
    color: #0d6efd;
    text-decoration: underline;
}

.full-url {
  font-size: 30px;
  margin: 18px 18px;
}

</style>
