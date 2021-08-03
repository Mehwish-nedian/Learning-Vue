<template>
    <div>
        <h1>{{Name}}</h1>
    </div>
</template>
<script>
import {computed} from 'vue';
export default {
    props: ['firstName', 'lastName'], 
    // Props object by default is reactive. Any change in parent componenet will reflect in child component.
    setup(props){
       const Name = computed(function fullName(){
            return props.firstName + ' ' + props.lastName
        })
     return {Name}
    }
   
}
</script>