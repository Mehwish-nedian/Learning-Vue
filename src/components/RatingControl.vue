<template>
    <div>
        <ul>
            <li :class="{active: modelValue==='poor'}"><button  type='button' @click="activate('poor')">Poor</button></li>
            <li :class="{active: modelValue==='avg'}"><button type='button' @click="activate('avg')">Average</button></li>
            <li :class="{active: modelValue==='good'}"><button type='button' @click="activate('good')">Good</button></li>
       
        </ul>
    </div>
</template>
<script>
export default {
    props:['modelValue'], // prop added automatically by vue on using v-model on custom component
    emits: ['update:modelValue'], // event emitted automatically by vue on using v-model on custom component

    
    methods:{
        activate(option){
            
            this.$emit('update:modelValue', option);
            /* Whenever button is clicked modelvalue is updated to option(i.e poor, avg, good)
            Then we can use this modelValue anywhere to apply if conditions and give unique style to selected option
            */
        }
    }
}
</script>
<style scoped>
.active{
    border-color: palevioletred;
}
.active button{
    color: palevioletred;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    display: flex
}
li{
    margin: 0 1rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
button{
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

</style>