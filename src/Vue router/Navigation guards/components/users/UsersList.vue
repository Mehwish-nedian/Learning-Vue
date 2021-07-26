<template>
<div>
  <button @click="changeRoute">Change route</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    changeRoute(){
      // do someting
      /* To change the route programatically */
      this.$router.push('/teams'); 
      /* $router function is available to all the components since we have use app.use(router) */

      /* $router also provides other functions (back, forward) */
    }
  },
  /*beforeRouteEnter(to, from, next){

  },
  beforeRouteLeave(to, from, next){
    // To run the code or save some data before leaving the component
  }*/
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>