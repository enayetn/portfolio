<template>
  <img :src="src" v-on:click="prevue" />
</template>

<script>
export default {
  name: 'ImgPrevue',
  props: ['title', 'src', 'oktxt'],
  methods: {
    prevue() {
      this.$buefy.dialog.alert({
        title: this.title,
        message: `<img src="${this.src}"/>`,
        confirmText: this.oktxt || 'Ok',
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  cursor: pointer;
}
</style>
