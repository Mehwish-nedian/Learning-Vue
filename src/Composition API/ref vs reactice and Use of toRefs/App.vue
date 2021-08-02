<template>
<div>
  <base-card>
  <h1>{{name}}</h1>
  <p>{{age}}</p>
  </base-card>
</div>
</template>
<script>
import { reactive, ref, toRefs} from 'vue';
export default {
  setup(){
    const Name = ref('Mehwish');
   
    console.log(Name.value);
    const User = ref({
      name: 'Mehwish',
      age: 19
    })
     console.log(User.value);
    const user = reactive({
      name: 'Joti',
      age: 20
    });
    /* The difference b/w ref and reactive is that ref is for all data types
    reactive is only for objects. We can also declare objects in refs but the difference is accessing method
    For ref ===> User.value.name, User.value.age,
    For reactive ===> user.name, user.value.age
    When we declare objects inside ref/reactive only the obj is reactive, its values are not
    If we return values to template if we update the values, the change will never reflect in the UI
    Now there can be two approaches to solve the issue
    1) ===> Pass the whole object return {user: user} and access in template as user.name, user.age
    2) ===> Use toRefs  const userRef = toRefs(user).This will make keys of object reactive.
            Now we can pass it as return {name: userRef.name, age: userRef.age}
    */
    setTimeout(()=>{  
    user.name = 'Mishi';
    user.age = 20;
    },3000)
    const userRef = toRefs(user);
    return {name: userRef.name, age: userRef.age}
  }
  
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

</style>