<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p
          v-if="invalidInput"
        >One or more input fields are invalid. Please check your provided data.</p>
        <p v-else-if="errorMessage">{{errorMessage}}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      errorMessage: null
    };
  },
 
  methods: {
    submitSurvey() {
      this.errorMessage = null;
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      /********** Send data to firebase database */
      // A node of survey is added and all data is stored inside that node
      fetch('https://http-demo-d4c23-default-rtdb.firebaseio.com/survey.json',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: this.enteredName, rating: this.chosenRating})
      })
      .then((response)=>{
        if(response.ok){
          console.log(response);
        }
        else{
          /* If data sent is not in the right format */
          this.errorMessage = 'Something went wrong. Please try again later';
        }
      })
      .catch((error) =>{
        /* If link is not accessible or cannot add data to the database*/
        this.errorMessage = 'Something went wrong. Please try again later';
        console.log(error)
      })

       

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>