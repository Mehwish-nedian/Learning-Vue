<template>
<div>
  <base-dialog v-if="error" title="An error has occured" :show="!!error" @close="error=null">{{error}}</base-dialog>
  <section>
      <coach-filter @update-filters="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
      </div>
      
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="!isLoading && hasCoaches">
        <coach-item
          v-for="coach in getCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        ></coach-item>
      </ul>
      <p v-else>No coaches found</p>
    </base-card>
  </section>
</div>
</template>
<script>

import CoachItem from "../../components/coaches/coachItems.vue";
import CoachFilter from "../../components/coaches/coachFilter.vue";
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data(){
      return{
          error: null,
          isLoading: false,
          activeFilters: {
              frontend: true,
              backend: true,
              career: true
          }
      }
  },
  computed: {
      isCoach(){
        return this.$store.getters['coaches/isCoach'];
      },
      getCoaches(){
          const coaches =  this.$store.getters['coaches/getCoaches'];
          return coaches.filter(coach=>{
              if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                  return true;
              }
              if(this.activeFilters.backend && coach.areas.includes('backend')){
                  return true;
              }
              if(this.activeFilters.career && coach.areas.includes('career')){
                  return true;
              }
              return false;
          })
      },
      hasCoaches(){
          return this.$store.getters['coaches/hasCoaches']
      }
    
  },
  created(){
    this.loadCoaches();
  },
  methods:{
      setFilters(updatedFilters){
          this.activeFilters = updatedFilters;
      },
       async loadCoaches(refresh = false){
        this.isLoading = true;
        try{
          await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh});
        }
        catch(error){
          this.error = error.message || 'Something went wrong!'
        }
        this.isLoading = false;
      }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>