<template>
<div  class="container">
  <base-button @click="startTransitioning">Start</base-button>
  <transition name="globe">
    <img v-if="showTransitioningGlobe" class = "globePic" src="./images/globe1.png" alt="Globe">
  </transition>
 <img v-if="showStaticGlobe" class = "globePic2" src="./images/globe1.png" alt="Globe">
</div>
</template>

<script>
import BaseButton from './components/BaseButton.vue';
//import TheCounter from './components/TheCounter.vue';

export default {
  data(){
    return{
      showStaticGlobe: true,
      showTransitioningGlobe: false
    };
  },
  components: {
    BaseButton
  },
  methods: {
    startTransitioning(){
        this.showStaticGlobe = false;
        this.showTransitioningGlobe = true;
    }
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
  text-align: center;
  overflow-x: hidden;
}

.container {
  
  display: flex;
  justify-content: center;
}
.globePic2{
  position: absolute;
  bottom: -900px;
}
.globePic{
  position: absolute;
  right: -350px;
  transform:  scale(0.8);
}
.globe-enter-from{
  right: 0;
  transform: translateY(400px);
}
.globe-enter-to{
  transform: translateY(130px);
  right: -350px;
}
.globe-enter-active{
  transition: all 1s ease-out;
}
</style>