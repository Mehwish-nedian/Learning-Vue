import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const coaches = {
    namespaced: true,
    state(){
        return {
            lastFetch: null,
            coaches: []
        }
    },
    mutations,
    actions,
    getters
}
export default coaches;