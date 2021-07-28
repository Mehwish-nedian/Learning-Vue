<template>

<!-- To have multiple elements inside transition, use transition-group with a tag name-->
    <transition-group tag="ul" name="user-list"> 
        <li @click="deleteData(user)" v-for="user in users" :key="user">{{user}}</li>
    </transition-group>
    <input type="text" ref="userName">
    <button @click="addData">Add to the list</button>
</template>
<script>
export default {
    data(){
        return{
            users: ['Mehwish', 'Maham', 'Munza', 'Joti', 'Midha']
        }
    },
    methods:{
        addData(){
            const name = this.$refs.userName.value;
            if(name!==''){
                this.users.unshift(name);
                this.$refs.userName.value= ''
            }
            
        },
        deleteData(item){
            this.users= this.users.filter(user => user!==item);
        }
    }
}
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
li{
    text-align: center;
    padding: 1rem;
    border: 1px solid #ccc;
    cursor: pointer;
}
input{
    margin: 10px;
}
.user-list-enter-from,
.user-list-leave-to
{
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active{
    transition: all 1s ease-in;

}
.user-list-leave-active{
    transition: all 1s ease-in;
    position: absolute;
}
.user-list-enter-to,
.user-list-leave-from{
    opacity: 1;
    transform: translateX(0);
}
.user-list-move{
    /* transition-group add this class to all the elements which are not currently animating */
    transition: transform 0.8s ease;
}
</style>