<template>
  <router-view />
</template>
<script>
import Style from "@/assets/style.scss";

export default {
  name: "app",
  components: {

  }
};
</script>

<style lang="scss">


nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
