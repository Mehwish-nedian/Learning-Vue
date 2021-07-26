<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!--Adding dynamic path-->
    <router-link :to="dynamicLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id','name', 'memberCount'],
  computed:{
    dynamicLink(){
      //return '/teams/' + this.id;
      /* This is just another way */
       return {
         name: 'team-members', 
         params: {teamId: this.id, /* Params in case of dynamic data in link */
         query: {plan: 'plan'}, // added to link to send data 
         /* query can be used inside of the component i.e teamMembers
         this.$route.query
         */
      } }
     // We can also pass this to this.$route.push({name: 'team-members', params: {teamId: this.id})

    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>