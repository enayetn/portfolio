<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style>
@import 'https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.info-section {
  text-align: left;
}
h2 {
  font-size: 200%;
  font-weight: 700;
}
.info-section > * {
  padding-left: 32px;
}
section {
  padding-top: 64px;
  padding-bottom: 64px;
}
html {
  scroll-behavior: smooth;
}
</style>
