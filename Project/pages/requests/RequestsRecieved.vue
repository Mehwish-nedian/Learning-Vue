<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Recieved</h2>
      </header>
     <base-dialog v-if="error" title="An error has occured" :show="!!error" @close="error=null">{{error}}</base-dialog>
      <base-spinner v-else-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequest && !isLoading">
          <request-item
          v-for="request in recievedRequests"
          :key="request.id"
          :email="request.email"
          :message="request.message"
          ></request-item>
      </ul>
    <h3 v-else>You have not recieved any request yet!</h3>
    </base-card>
  </section>
</template>
<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  data(){
    return {
      error: null,
      isLoading: false
    };
  },
  computed: {
    recievedRequests() {
      return this.$store.getters["requests/getRequests"];
    },
    hasRequest() {
      return this.$store.getters["requests/hasRequest"];
    },
  },
  created(){
    this.loadRequest();
  },
  methods: {
    async loadRequest(){
      this.isLoading = true;
      try{
        await this.$store.dispatch('requests/fetchRequests')
      }catch(error){
        this.error = error.message || 'Failed to fetch'
      }
      
      this.isLoading = false;
    }
  }
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>