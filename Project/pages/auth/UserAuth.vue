<template>
<div>
<base-dialog :show="!!error" title="An error has occured" @close ="error=null">
    <p>{{error}}</p>
</base-dialog>
<base-dialog :show="isLoading" fixed title="Authenticating...">
<base-spinner></base-spinner>
</base-dialog>
    <form @submit.prevent="submitForm()" >
        <base-card>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email"/>
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password"/>
            </div>
            <p v-if="!formIsValid">Please enter valid data to continue.</p>
            <base-button >{{submitButtonCaption}}</base-button>
            <base-button buttonType="button" mode="flat" @click="switchMode()" >{{switchModeButtonCaption}}</base-button>
        </base-card>
    </form>
</div>
</template>
<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            mode: 'login',
            formIsValid: true,
            error : null,
            isLoading : false
        };
    },
    computed:{
        submitButtonCaption(){
            if(this.mode === 'login'){
                return 'Login';
            }
            else{
                return 'Signup';
            }
        },
        switchModeButtonCaption(){
            if(this.mode === 'login'){
                return 'Signup instead';
            }
            else{
                return 'Login instead';
            }
        }
    },
    methods:{
        async submitForm(){
            this.formIsValid = true;
            this.isLoading = true;
            
            if(this.email ==='' || this.password.length <6){
                this.formIsValid = false;
                this.isLoading = false;
                return;
            }
            const payloadData = {
                    email: this.email,
                    password: this.password
            }
            try{  
                if(this.mode ==='login'){
                    await this.$store.dispatch('login',payloadData)
                }else{
                    await this.$store.dispatch('signup',payloadData)
                }
                const redirectURL = '/' +(this.$route.query.redirect || 'coaches');
                this.$router.replace(redirectURL);
            }catch(err){
                this.error = err.message || 'Failed to signup. Please try later'
            }
            this.isLoading = false;
        },
        switchMode(){
            if(this.mode ==='login'){
                this.mode = 'signup'
            }
            else{
                this.mode = 'login'
            }
        }
    }
}
</script>
<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>