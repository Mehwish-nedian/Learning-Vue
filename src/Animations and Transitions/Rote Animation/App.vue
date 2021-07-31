<template>
  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
        <component :is="Component"></component>
    </transition>
  </router-view>
</template>  
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
.route-enter-active {
  transition: opacity 0.3s ease-out;
}
.route-leave-active {
  transition: opacity 0.3s ease-in;
}
.route-enter-from,
.route-button-leave-to {
  opacity: 0;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

</style>
