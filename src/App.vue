<script></script>

<template>
  <div id="app">
    <div class="app-container">
      <b-navbar toggleable="sm" type="light" variant="" class="navbar-color">
        <b-navbar-toggle
          target="nav-text-collapse"
          class="nav-bar-toggle"
        ></b-navbar-toggle>

        <b-navbar-brand style="text-align: center; display: flex">
          <img
            src="./assets/logo_200x200.png"
            width="50"
            height="50"
            class="navbar-logo"
        /></b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text
              ><router-link to="/" class="router-text"
                >Home</router-link
              ></b-nav-text
            >
            <b-nav-text
              ><router-link to="/about" class="router-text"
                >About</router-link
              ></b-nav-text
            >
            <b-nav-text
              ><router-link to="/githubprojects" class="router-text"
                >GitHub Projects</router-link
              ></b-nav-text
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <div class="footer">
      <a href="https://www.instagram.com/nicholas_29183/" target="_blank">
        <mdicon name="Instagram" width="40" height="40"></mdicon
      ></a>
      <a href="https://github.com/Thoks10a" target="_blank"
        ><mdicon name="Github" width="40" height="40"></mdicon
      ></a>
      <a href="" target="_blank"
        ><mdicon name="Home" width="40" height="40"></mdicon
      ></a>
    </div>
  </div>
</template>

<style lang="scss">
@import "globalStyle";

.navbar-brand {
  margin-left: 0.5rem !important;
}

.navbar-color {
  background-color: $color-background-nav !important;
}

#nav-text-collapse {
  .router-text {
    margin-left: 0.5rem;
  }
  a {
    color: white;
  }
}

.nav-bar-toggle {
  margin-left: 1rem;
}

.navbar-text {
  margin-left: 0.5rem;
  @include a-hover;
}

.navbar-logo {
  border: 0.1rem solid rgb(49, 49, 49);
  border-radius: 10%;
}

.footer {
  text-align: center;
  height: auto;
  width: 100%;
  background-color: $color-background-nav;
  a {
    margin: 0 0.5rem 0 0.5rem;
    cursor: pointer;
    color: rgb(255, 255, 255);
    @include a-hover;
    transition: 0.3s opacity;
  }
  a:hover {
    opacity: 0.5;
    color: white;
  }
}
</style>
