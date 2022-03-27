<script>
export default {
  name: "HelloWorld",
};
</script>

<template>
  <div class="hello">
    <div class="container-hello">
      <div><h1>Home</h1></div>
      <img src="../assets/logo_200x200.png" width="100" height="100" />
      <div>
        <p>Site teste, criado usando Vue e rotas!</p>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../globalStyle.scss";

.hello {
  width: 100%;
  height: 82.7vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.container-hello {
  text-align: center;
  img {
    border-radius: 10%;
  }
  h1,
  p,
  img {
    margin: 1rem;
  }
}
</style>
