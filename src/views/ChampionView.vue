<template>
  <div>
    <h1>You are the champion!</h1>
    <img src="https://images-na.ssl-images-amazon.com/images/I/71rHknfdadL._SY879_.jpg" />
  </div>
</template>

<script>
export default {
  name: "Champion",
  beforeCreate() {
    this.score = this.$route.params.score;
  }
};
</script>
<style scoped>
img {
  height: 200px;
}
</style>