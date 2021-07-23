<template>
<div>
 <Header title = "Remember Me"/>
<the-resources></the-resources>

</div>
 
</template>

<script>



import Header from './components/layouts/theHeader';

import TheResources from './components/learning-resources/TheResources.vue'


export default {
  components: {
    TheResources,
    Header
  }
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
