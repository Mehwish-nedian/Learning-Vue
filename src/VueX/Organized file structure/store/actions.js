export default {
  login(context) {
    console.log("action called");
    context.commit("login");
  },
  logout(context) {
    context.commit("logout");
  },
  increment(context) {
    setTimeout(function() {
      context.commit("increment");
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    //Calling the mutation increment
    context.commit("increase", payload);
  }
};