<template>
<div>
    <h1>{{fullName}}</h1>
    <input type="text" placeholder="first name" v-model="firstName"/>
    <input type="text" placeholder="last name" v-model="lastName"/>
</div>
</template>
<script>
import { ref, watch} from 'vue';
export default {
  setup(){
    const firstName = ref('');
    const lastName = ref('');
    const fullName = ref('');
    /* In option API we usec to write
    watch:{
      firstName(){
        this.fullName = this.lastName
      }
    }
  */
    /* Replacement from watch option to watch function */
    //  Watch one data property
    watch(firstName, function(newVal,oldVal){
      console.log('Updated value =>'+newVal);
      console.log('Previous value =>'+oldVal);
      fullName.value = firstName.value
    })
  
    /* This watch functions gives us more flexibilty as we can watch more than one data property at a time*/

    watch([firstName, lastName],function(newValues, oldValues){
      console.log('Updated value for first Name=>'+newValues[0]);
      console.log('Previous value for first Name =>'+oldValues[0]);
      console.log('Updated value for last Name=>'+newValues[1]);
      console.log('Previous value for last Name =>'+oldValues[1]);
      fullName.value = firstName.value +' ' + lastName.value;
    })
    
    return {fullName, firstName, lastName}
  }
  
}
</script>
