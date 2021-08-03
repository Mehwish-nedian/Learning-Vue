<template>
<div>
 <h1>{{name}}</h1>
 <input type="text" ref="NamefromInput"/>
 <button @click="setName">Set Name</button>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
    const name = ref('');
    const NamefromInput = ref(null);
    function setName(){
      // In option API: this.$refs.NamefromInput.value
     // In composition API  NamefromInput.value for referencing ref object and then value for its value
      name.value = NamefromInput.value.value; 
      // 
    }
    return {name, setName, NamefromInput}
  }
};
</script>