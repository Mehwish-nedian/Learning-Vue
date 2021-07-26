<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to='/teams'>Teams</router-link>
        </li>
        <li>
          <router-link to='/users'>Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  /* router-link component actually renders an anchor tag element 
  so, we can style it by selecting a*/
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active /* Automatically added by vue */
 /* Changed router-link-active class in main js now we can use this also*/
{ 
  /*Vue automatically adds 'router-link-active' class to 'a' tag(cretaed by router-link)
  to So, we can style active tab by using a.router-link-active
  There is also another option of router-link-exact-active , it will work only if the link is exact 
  Nothing is nested after that link. (Applied on /teams not on /teams/something
  */
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>