<template>
    <section>
        <base-card>
            <base-button @click="setSelectedTab('Add-resources')"
             :mode="storedResButtonMode">Add Resources</base-button>
            <base-button @click="setSelectedTab('stored-resources')" 
            :mode="addResButtonMode"
            >Stored Resources</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab" ></component>
        </keep-alive>
    </section>
</template>
<script>
import AddResources from './AddResources.vue';
import storedResources from './storedResources.vue'
export default {
    components:{
        AddResources,
        storedResources
    },
    data(){
        return{
            selectedTab : 'stored-resources',
            storedResources:[
                {
                id: 'Official Guide',
                title: 'Official Guide',
                description: 'This is the official documentation of Vue',
                link: 'https://vuejs.org'
                },
                {
                id: 'Google',
                title: 'Google',
                description: 'Google anything',
                link: 'https://google.com'
                }
            ]
        }
    },
    computed: {
        storedResButtonMode(){
            return this.selectedTab ==='stored-resources'? null: 'flat'
        },
        addResButtonMode(){
            return this.selectedTab ==='Add-resources'? null: 'flat'
        }

    },
    provide(){
        return{
            storedResources: this.storedResources,
            addNewResource: this.addNewResource,
           deleteResource: this.removeResource
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab=tab
        },
        addNewResource(newObj){
            this.storedResources.unshift(newObj);
            this.setSelectedTab('stored-resources');
        },
        removeResource(resId){
            const getIndex = this.storedResources.findIndex(
                res=>res.id===resId
            );
            this.storedResources.splice(getIndex,1);
        }
    }
}
</script>

<style scoped>

</style>