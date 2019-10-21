<template>
  <div>
    <h1>You lose</h1>
    <img src="https://media.newyorker.com/photos/5d72980970858f0008493f38/master/w_2560,h_2534,c_limit/7-Lian-gameover.jpg"/>
    <h4>Your score: {{score}}</h4>
  </div>
</template>

<script>
export default {
  name: "Lose",
  beforeCreate() {
    this.score = this.$route.params.score;
  }
};
</script>
<style scoped>
    img{
        height: 150px;
        width: 150px;
    }
</style>