<template>
    <div>
        <button @click="login">Login</button>
        <button @click="logout">Logout</button>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    computed:{
        ...mapGetters(['isAuth'])
    },
    methods:{
        ...mapActions(['login','logout'])
    }
}
</script>