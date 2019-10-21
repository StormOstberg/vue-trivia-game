<template>
  <div>
    <h1>You Win</h1>
    <h4>Your score: {{score}}</h4>
  </div>
</template>

<script>
export default {
  name: "win",
  beforeCreate() {
    this.score = this.$route.params.score;
  }
};
</script>
<style scoped>
img {
  height: 150px;
  width: 150px;
}
</style>