<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<style lang="scss">
@import "../globalStyle.scss";

.home {
  width: 100%;
  height: 82.7vh;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
