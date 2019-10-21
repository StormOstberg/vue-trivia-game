<template>
  <div id="question-list">
    <h2>True or False</h2>
    <QuestionItem v-on:answerMethod="setScore" v-bind:question="questions[this.currQuestion]" />
    <br />
  </div>
</template>

<script>
import QuestionItem from "./Question";
import axios from "axios";

export default {
  name: "QuestionList",
  components: {
    QuestionItem
  },
  props: ["question"],
  beforeCreate() {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=boolean")
      .then(resp => resp.data)
      .then(resp => resp.results)
      .then(resp => {
        this.questions = resp;
      });
  },
  data() {
    return {
      questions: [],
      currQuestion: 0,
      score: 0
    };
  },
  methods: {
    setScore: function(answer) {
      this.currQuestion++;

      if (answer) {
        this.score++;
      }
      if (this.currQuestion >= 9 && this.score >= 5) {
        if (this.score >= 8) {
          this.$router.push({
            name: "champ",
            params: { score: this.score }
          });
        } else {
          this.$router.push({
            name: "win",
            params: { score: this.score }
          });
        }
      }
      if (this.currQuestion >= 9 && this.score < 5) {
        this.$router.push({
          name: "lose",
          params: { score: this.score }
        });
      }
    }
  }
};
</script>

<style scoped>
#todo-list {
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
}
</style> 