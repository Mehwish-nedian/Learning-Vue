<template>
    <div>
        <h1>{{Name}}</h1>
    </div>
</template>
<script>
import {computed, inject} from 'vue';
export default {
  setup(){
        const firstName = inject('firstName');
        const lastName = inject('lastName');
       const Name = computed(function fullName(){
            return firstName.value + ' ' + lastName.value
        })
     return {Name}
    }
   
}
</script>