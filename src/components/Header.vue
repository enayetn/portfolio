<template>
  <b-navbar fixed-top class="shadow">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo.png" alt="Nabil Enayet's Personal Portfolio" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#overview">
        Overview
      </b-navbar-item>
      <b-navbar-item href="#resume">
        Resume
      </b-navbar-item>
      <b-navbar-item href="#workprojects">
        Work Projects
      </b-navbar-item>
      <b-navbar-item href="#personalprojects">
        Personal Projects
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            href="https://www.linkedin.com/in/nabilenayet/"
            target="_blank"
            class="button"
          >
            Linkedin
          </a>
          <b-navbar-dropdown label="Github" class="button">
            <b-navbar-item
              href="https://github.com/nabil-nuvolo"
              target="_blank"
            >
              Professional
            </b-navbar-item>
            <b-navbar-item href="https://github.com/enayetn" target="_blank">
              Personal
            </b-navbar-item>
          </b-navbar-dropdown>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-gh {
  background: #6e5494;
  color: whitesmoke;
}
.is-li {
  background: #0c66c2;
  color: whitesmoke;
}
.shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
