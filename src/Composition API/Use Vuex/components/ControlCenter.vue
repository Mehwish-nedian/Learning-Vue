<template>
  <button @click="inc">Increment</button>
</template>

<script>
import {useStore} from 'vuex';
export default {
  setup() {
    const store = useStore(); //replacement of this.$store
    function inc() {
      store.dispatch('increment');
    }
      
    return { inc };
  },
};
</script>