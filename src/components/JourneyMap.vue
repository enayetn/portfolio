<template>
  <b-steps>
    <b-step-item label="Account" icon="account-key"></b-step-item>
    <b-step-item label="Profile" icon="account"></b-step-item>
    <b-step-item label="Social" icon="account-plus"></b-step-item>
  </b-steps>
</template>

<script>
export default {
  name: 'JourneyMap',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  height: 512px;
  width: 100%;
}
</style>
