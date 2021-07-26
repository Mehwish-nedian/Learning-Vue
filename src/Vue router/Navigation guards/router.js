
import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./components/teams/TeamsList.vue";
import usersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/teams"
      // We can also add any separatr component here But that will not change url Redirect will...
    },
    {
      name: "teams",
      path: "/teams",
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      //alias: "/" // Usign alias will load this component on '/' without changing url
      children: [
        // To load the component on the same page configure children here and
        // Then use <router-view></router-view> inside the parent component i.e TeamsList here
        {
          name: "team-members",
          // This object should always be placed after object with path of '/teams' or '/teams/something' if not used as achild
          path: ":teamId",
          //Any thing in the url after /teams/ will be treated ad teamID
          // We can access what's stored in teamId by using (this.$route.params.teamId) in that component i.e TeamMembers
          component: TeamMembers,
          props: true // To load component using prop in both cases via prop or via route
        }
      ]
    },
    {
      path: "/users",
      meta: { authenticated: true }, // This data will be added to this component
      //and can be used in beforeEach, beforeRouteEnter or beforeRouteLeave as to.meta.authenticated
      components: {
        default: usersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        // Works same as beforeEach but only for this path
        console.log("BeforeEnter");
        console.log(to, from);
        next();
        // Same thing can be done inside component by using beforeRouteEnter(to, from, next)
      }
    },

    {
      path: "/:notFound(.*)", //should always be placed at last
      //component: NotFound, To load error page if you have
      redirect: "/users" // to redirect to other route
    }
  ],
  //linkActiveClass: 'activelink',
  // We can change link-active-class to any classname of our choice and style it usng this class
  //linkExactActiveClass: 'exactactivelink' //Similar case as linkActiveClass
  scrollBehavior(to, from, savedPosition) {
    console.log(to); // New route where you are going
    console.log(from); // Previous route where you are coming from
    console.log(savedPosition);
    // Position object containing left and top values of the position on the component loaded
    if (savedPosition) {
      return savedPosition; // To go back to lower component position
      /* Initially, savedPosition contains null. position is saved only when back button is pressed */
    }
    // To go to top when a new route is followed
    return { top: 0, left: 0 };
  }
});
router.beforeEach((to, from, next) => {
  // This function will be called before every navigation(route) change
  // Can be used to send analytics data to server
  console.log("Global Foreach");
  console.log(to, from);
  next(); // To confirm navigation
  // next(false); // To cancel navigation. Can be used if the user is not authenticated.
  /*if(to.name ==='team-members'){
    next();
  }
  else{
    next({name: 'team-members', params:{teamId: 't3'}}); // To go to /teams/t3
  }*/
});
export default router;