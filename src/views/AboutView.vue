<template>
  <div class="about">
    <div class="container-about">
      <div><h1>About</h1></div>
      <img src="../assets/58711535.jpg" width="200" height="200" />
      <div>
        <p>Site teste, criado usando Vue e rotas!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../globalStyle.scss";

.about {
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.container-about {
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
