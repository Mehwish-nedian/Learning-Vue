<template>
<div>
  <base-container v-if="isAuth" title="Vuex">
     <h3>{{ finalCounter }}</h3> <!--Getter used through mapGetter-->
     <h3>{{ normalizedCounter }}</h3> <!--Getter used through mapGetter-->
     <p>We do more...</p>
     <!--Change data in store mapActions dispatch action==>action commit to mutation ==>mutation change the data-->
     <button @click="increase({value: 10})">Add 10</button> 
     <button @click="inc">Add 2</button>
     <button @click="increase({value: 11})">Add 11</button>
  </base-container>
  <base-container title="Authentication">
    <user-auth></user-auth>
  </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer,
    UserAuth
  },
   computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters('counter',['finalCounter', 'normalizedCounter']),
    ...mapGetters(['isAuth'])
  },
  methods: {
    addTen() {
      // this.$store.dispatch('increase', { value: 10 });
      /*this.$store.dispatch({
        type: 'increase',
        value: 10
      });*/
      
    },

     // addOne() {
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase'])
    ...mapActions('counter',{
      inc: 'increment', // If you want to give any name of your choice
      increase: 'increase'
    })
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
</style>