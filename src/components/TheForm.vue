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
    <div>
       <div class='form-control'>
         <rating-control v-model="rating"></rating-control>
          <!--
            By using v-model on custom components, Vue adds one special prop (modelValue)
            and emit one event (update:modelValue) 
          -->


       </div>
    
      <button>Save Data</button>
    </div>
  </form>
</template>
<script>
import RatingControl from './RatingControl.vue'
export default {
  components:{
    RatingControl
  },
  data(){
    return{
      userName : '',
      userAge : '',     
      inputIsInvalid : false,
      rating: null
    }
  },
  methods:{
    submitData(){
      
      console.log('Username ==> ' +this.userName);
      console.log('UserAge ==> '+this.userAge);
      console.log('Rating ==>');
      console.log(this.rating); // This contains the value sent by modelValue and gets updated as the modelValue is updated
      this.rating = null; // Since v-model uses two way binding, this will also reset modelValue to null
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