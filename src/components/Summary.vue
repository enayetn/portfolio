<template>
  <section>
    <div class="columns">
      <div class="column container is-fluid info-section">
        <h2>
          <span
            style="display:inline-block"
            class="animated wobble slow delay-1s"
            >👋</span
          >
          Hi there!
        </h2>
        <h3>
          I'm Nabil, thanks for swinging by
        </h3>
        <br />
        <h3>
          Here are a few things you can expect to see as you scroll through
        </h3>
        <div class="pad-left" v-for="item in items" :key="item.key">
          <a :href="`#${item.key}`"> #{{ item.title }} </a>
        </div>
      </div>
      <div class="column is-two-thirds">
        <div class="imgWrapper is-hidden-mobile">
          <img class="dags" v-on:click="dags" src="@/assets/dags.jpg" />
          <img class="profile" src="@/assets/me.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dags from '@/assets/dags.jpg';

export default {
  name: 'Summary',
  methods: {
    dags() {
      this.$buefy.dialog.alert({
        title: 'You found my dogs! 🦮🦮',
        message: `<div style="text-align:center">Meet Storm (left), and Thunder (right)!</div> <div><img src="${dags}"/> </div>`,
        confirmText: 'Woof!',
      });
    },
  },
  data() {
    return {
      items: [
        {
          icon: 'note',
          title: 'Resume',
          key: 'resume',
        },
        {
          icon: 'wrench',
          title: 'Professional Software Projects',
          key: 'workprojects',
        },
        {
          icon: 'gamepad',
          title: 'Personal Projects',
          key: 'personalprojects',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background: #ecf0f1;
  margin-top: 2px;
}
img {
  height: 224px;
  width: 224px;
  padding: 10px;
  background: white;
  transition: 0.4s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

img.profile {
  transform: rotate(-3deg) translateX(-120px);
}
.imgWrapper:hover img.profile {
  transform: rotate(-5deg) translateX(-120px);
}

img.dags {
  transform: rotate(-1deg) translateX(114px) translateY(4px);
}
.imgWrapper:hover img.dags {
  transform: rotate(3deg) translateX(114px) translateY(-4px);
  cursor: pointer;
}
.pad-left {
  margin: 16px;
}
</style>
