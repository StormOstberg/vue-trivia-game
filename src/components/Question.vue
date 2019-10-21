<template>
  <div id="question-item">
    <span class="title">
      <p>{{ question.category }}</p>
      <p v-html="question.question"></p>
    </span>
    <button v-on:click="checkAnswer('True')">True</button>
    <button v-on:click="checkAnswer('False')">False</button>
  </div>
</template>
<script>
export default {
  name: "QuestionItem",
  props: ["question"],
  methods: {
    checkAnswer: function(btnAnswer) {
      if (btnAnswer == this.question.correct_answer) {
        this.$emit("answerMethod", true);
      } else {
        this.$emit("answerMethod", false);
      }
    }
  }
};
</script>
<style scoped>
</style>