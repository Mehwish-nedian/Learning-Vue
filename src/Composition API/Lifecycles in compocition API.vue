<template>
<div>
  <user-data></user-data>
  <button @click="changeName">Change name</button>
  </div>
</template>

<script>
import {ref, provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
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
    onBeforeMount(function(){
      console.log('onBeforeMount');
    });
      /*Lifecycle method beforeCreate and created is removed from composition API
        as setup only runs when the component is created so for these methods coe can be written inside setup directly*/

    onMounted(function(){
      console.log('onMounted');
    });

    onBeforeUpdate(function(){
      console.log('onBeforeUpdate');
    });

    onUpdated(function(){
      console.log('onUpdated');
    });

    onBeforeUnmount(function(){
      console.log('onBeforeUnmount');
    });
    onUnmounted(function(){
      console.log('onUnmounted');
    });
    return {firstName, lastName, changeName}
  }
};
</script>
