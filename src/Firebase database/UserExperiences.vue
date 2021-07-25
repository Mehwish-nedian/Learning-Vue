<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="errorMessage">{{errorMessage}}</p>
        <p v-else-if="!isLoading && results.length===0">There is no data to show. Please add some data first.</p>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results:[],
      isLoading: false,
      errorMessage: null
    }
  },
 mounted(){
   this.loadData();
 },
  methods:{
    loadData(){
      this.errorMessage = null;
      this.isLoading = true;
      /* To get data from firebase database No need to specify method by default it is GET */
      fetch('https://http-demo-d4c23-default-rtdb.firebaseio.com/survey.json')
        .then((response)=>{
          if(response.ok){
            return response.json();
          }
        })
        .then((data)=>{
          const results = [];
          
          for(const id in data){
            results.push({id: id, name: data[id].name, rating: data[id].rating});
          }
          this.isLoading = false;
          this.results = results;
        })
        .catch((error)=>{
          /* Can't fetch data due to any reason i.e link inaccessible etc*/
          this.errorMessage = 'Cannot get data Please try again later';
          this.isLoading = false;
          console.log(error);
        })
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
</style>