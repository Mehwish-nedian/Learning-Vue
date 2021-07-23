<template>
  <form @submit.prevent = "submitData">
    <div class="form-control" :class="{invalid: inputIsInvalid}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName" @blur="checkvalidity"/>
      <p v-if="inputIsInvalid">This field is required!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" ref="age"/>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest"/>
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
    <div>
      <input id="terms" name="terms" type="checkbox" v-model="confirm"/>
      <!-- For a single checkbox, no need to add value it retuns true when checked and false when uncheck-->
      <label for="terms">Agree to Terms and conditions</label> 
  </div>
      <button>Save Data</button>
    </div>
  </form>
</template>
<script>
export default {
  data(){
    return{
      userName : '',
      userAge : '',
      referrer : 'wom',
      interest : [],
      confirm: false,
      /*For multiple checkboxes withthe same name, 
      it create group and start selecting them all when anyone is selected.
      To overcome this, we use array here and gives unique vaæue attributes to all checkboxes input*/
      how: null,
      inputIsInvalid : false
    }
  },
  methods:{
    submitData(){
      
      console.log('Username ==> ' +this.userName);
      console.log('UserAge ==> ');
      console.log(typeof(+this.userAge)); // v-model and ref both store values type as string
      console.log(typeof(+this.$refs.age.value)); // To convert it into number use '+' sign
      console.log('Referrer ==> ' +this.referrer);
      console.log('Interest ==> ' +this.interest);
      console.log('How ==> ' +this.how);
      console.log(this.confirm);
    },
    check(){
      console.log(this.$refs.age.value);
    },
    checkvalidity(){
      if(this.userName.trim()===''){
        this.inputIsInvalid = true;
      }
    }
  }
}
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}
.form-control.invalid input{
  border-color: red
}
.form-control.invalid label{
  color: red;
}
label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>