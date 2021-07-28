export default {
  login(state) {
    console.log("mutation called");
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  }
  //Called by action
};