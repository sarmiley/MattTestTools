<template>
  <div id="home">
    <h1>登入</h1>
    <router-link :to="{name: 'login'}">
      <p>Login</p>
    </router-link>

    <ul>
      <li><a href="scmbtw://">scmbtw://</a></li>
      <li><a href="scmbtw://*">scmbtw://*</a></li>
      <li><a href="scmbtw://fund/fundMyWatch?fundId=123456">scmbtw://fund/fundMyWatch?fundId=123456</a></li>
      <li><a href="scmbtw://login">scmbtw://login</a></li>
    </ul>

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
  }
}
</script>
