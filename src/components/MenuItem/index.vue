<template>
  <div>
    <ul>
       <li class="nav" v-for="(item, index) in items" :key="item.name">
        <template v-if="index !== (items.length - 1)">
          <router-link :to="{name: item.name}">{{item.name}}</router-link>
          <span> | </span>
        </template>
        <template  v-else>
          <router-link :to="{name: item.name}">{{item.name}}</router-link>
        </template>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    items: {
      type: Array,
      item: {
        path: String,
        name: String
      }
    }
  }
}
</script>

<style scoped>
.nav {
  margin-bottom: 10px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

ul {
  list-style: none;
  list-style-type: none;
}

li {
  display: inline-block;
  margin-right: 10px;
}

</style>
