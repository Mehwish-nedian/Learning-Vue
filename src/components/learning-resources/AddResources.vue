<template>
<div>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, you have left an input field empty</p>
            <p>Please enter atleast few characters to each input field</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="addResource" >
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3" ref="description"></textarea>
            </div>
            <div class="form-control">
                <label for="Link">Link</label>
                <input id="Link" name="Link" type="url" ref="link">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
    </div>
</template>
<script>
export default {
    inject:['addNewResource'],
    data(){
        return{
            inputIsInvalid: false
        }
    },
    methods:{
        confirmError(){
            this.inputIsInvalid=false;
        },
        addResource(){
            const enteredTitle = this.$refs.title.value.trim();
            const enteredDescription = this.$refs.description.value.trim();
            const enteredLink =  this.$refs.link.value.trim();
            if(enteredTitle===''||enteredDescription===''||enteredLink===''){
                this.inputIsInvalid=true;
                return;
            }
            const newObj ={
                title: enteredTitle,
                description: enteredDescription,
                link: enteredLink
            };
            this.addNewResource(newObj);
        }
        
    }
    
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>