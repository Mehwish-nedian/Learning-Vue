<template>
<div>
  <div class="container">
    <transition name='para'>
      <!-- Transition tag only accept one direct child
      We can have two childs but with if else condition to guarantee one child at a time
      -->
      <p v-if="paraIsVisible">This will be visible sometimes</p>
    </transition>
    <button @click="togglePara">Toggle</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
</div>
  
</template>  

<script>
export default {
  data() {
    return { 
      usersAreVisible: false,
      paraIsVisible: false
       };
  },
  methods: {
    togglePara(){
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
.para-enter-from,
.para-leave-to{
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active{
  transition: all 0.5s ease-out
}
.para-leave-active{
  transition: all 0.5s ease-in
}
.para-enter-to,
.para-leave-from{
  opacity: 1;
  transform: translateY(0)
}


.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}


button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;

}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

</style>