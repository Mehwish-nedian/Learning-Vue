<template>
<div>
    <h1>Course Goal</h1>
    <h1 v-if="show">{{goal}}</h1>
    <button @click="toggleGoal()">Toggle</button>
</div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup(){
    const goal = ref('Finish the course');
    const showGoal = ref(true);
    /* Methods replacement */
    function toggleGoal(){
        showGoal.value = !(showGoal.value);
    }
    return {goal: goal.value, show: showGoal, toggleGoal}
  }
  
}
</script>
