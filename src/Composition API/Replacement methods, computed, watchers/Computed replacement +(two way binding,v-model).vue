<template>
<div>
    <h1>{{fullName}}</h1>
    <input type="text" placeholder="first name" v-model="firstName"/>
    <input type="text" placeholder="last name" v-model="lastName"/>
</div>
</template>
<script>
import { ref, computed} from 'vue';
export default {
  setup(){
    const firstName = ref('');
    const lastName = ref('');
    /* Replacement from computed option to computed function 
    The value returned by computed to fullName is also a ref which wwe can access by fullName.value
    But it's read only ref and is not allowed to be updated manually (fullName.value ='Something' Not allowed)
    */
    const fullName = computed(function(){
      return firstName.value +' '+ lastName.value;
    })
    
    return {fullName, firstName, lastName}
  }
  
}
</script>