<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import {useRoute} from 'vue-router'; //  In plaace of API, useRoute hook is used
export default {

  /* To go to the same page with different id(parameter) we use watch in options API to prop
    Here we can use computed and it will work
  */
  //props: ['pid'],
  setup() {
    /****************By using useRoute Hook */
    const products = inject('products');
    const route = useRoute(); // Similar as this.$route
    const selectedProduct = computed(()=>products.value.find(product => product.id === route.params.pid));
    /************************************************************/
    
     /*********************** By uaing Props********************/
     const products = inject('products');
     const selectedProduct = computed(()=>products.value.find(product => product.id === props.pid));
    /************************************************************/
    
    const title = computed(()=>selectedProduct.value.title);
    const price = computed(()=>selectedProduct.value.price);
    const description = computed(()=>selectedProduct.value.description);
    return { title, price, description };
  },

 
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>