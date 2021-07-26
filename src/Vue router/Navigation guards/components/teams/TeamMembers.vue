<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
    <!--
      Here we are trying to go to the same page with different id/parameter
      This won't work until you add watcher to teamId 
      The problem here is that vue can see that you are referring to the same page
      so, it doesn't destroy your component and the same (previous) component continues to display on the screen
      But if you notice carefully on the url, you will notice that the url is changed 
      So, we add watcher to $router and updates the component accordingly.
     -->
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  props:['teamId'],
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods:{
    /*loadComponentviaRoute works perfectly fine but there is one problem here
    Since we are using route to create the component. 
    Now we cannot use it directly inside any other component like(<team-members></team-members)
    The reusability of the component decreased,
    To solve this we can use teamId to load the component instead of route and also add watcher to teamId otherwise it won't work.
    */
   /* loadComponentviaRoute(route){

    const teamId = route.params.teamId; // Getting what's after /teams/ in url
    // To select the team with that teamId
    const selectedTeam = this.teams.find(team => team.id === teamId);

    const selectedMembers = [];
    // members array inside selected team object
    const members = selectedTeam.members;
    // Looping through members array inside selectedTeam object
    for(const member of members){
      // Find the users with the sam id as that of elements of member array
      const selected = this.users.find(user =>user.id === member);
      selectedMembers.push(selected)
    }
    this.teamName = selectedTeam.name;
    this.members = selectedMembers;
    },*/
    loadComponentViaProp(teamId){
       // To select the team with that teamId
       console.log(teamId)
    const selectedTeam = this.teams.find(team => team.id === teamId);

    const selectedMembers = [];
    // members array inside selected team object
    const members = selectedTeam.members;
    // Looping through members array inside selectedTeam object
    for(const member of members){
      // Find the users with the sam id as that of elements of member array
      const selected = this.users.find(user =>user.id === member);
      selectedMembers.push(selected)
    }
    this.teamName = selectedTeam.name;
    this.members = selectedMembers;
    },
  }
  ,
  created(){
    /* Loading component via prop is a better option */
    
    this.loadComponentViaProp(this.teamId);
    console.log(this.$route.query);
  },
  watch:{
    $route(newRoute){
      /* Now router-link will start working properly */
      //this.loadComponentviaRoute(newRoute);
      console.log(newRoute);
      

    },
    teamId(newId){
      this.loadComponentViaProp(newId);
    }
  }

};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>