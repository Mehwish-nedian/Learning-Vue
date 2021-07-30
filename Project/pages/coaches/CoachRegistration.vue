<template>
<base-card>
    <h2>Register as a coach Now!</h2>
    <registration-form @save-data="saveData"></registration-form>
</base-card>
</template>
<script>
import RegistrationForm from '../../components/coaches/RegistrationForn.vue';

export default {
    components: {
        RegistrationForm
    },
    methods:{
        saveData(formData){
            this.$store.dispatch('coaches/registerCoach',formData)
            this.$router.push('/coaches');
        }
    }
}
</script>