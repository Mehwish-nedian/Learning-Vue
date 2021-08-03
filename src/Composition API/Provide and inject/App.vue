<template>
<div>
  <user-data></user-data>
  <button @click="changeName">Change name</button>
  </div>
</template>

<script>
import {ref, provide} from 'vue';
import UserData from './components/UserData.vue'
export default {
  components: {UserData},
  setup(){
    const firstName = ref('Mehwish');
    const lastName = ref('Nizam');
    function changeName(){
        firstName.value = 'Asif';
    }
    provide('firstName', firstName)
    provide('lastName',lastName);
    return {firstName, lastName, changeName}
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30006e;
  color: white;
}
section {
  margin: 2rem auto;
  max-width: 35rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

form div {
  margin: 1rem 0;
}
input {
  width: 100%;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin: 0.5rem 0;
}
button {
  background-color: #30006e;
  border: 1px solid #30006e;
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  color: white;
}
button:hover,
button:active {
  background-color: #5819ac;
  border-color: #5819ac;
}
</style>