<template>
  <div class="home">
    <br />
    <QuestionList />
  </div>
</template>

<script>
import QuestionList from "@/components/QuestionList.vue";

export default {
  name: "home",
  components: {
    QuestionList
  }
};
</script>
