import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
export default {
    namespaced: true,
    state(){
        return{
            requests: [
                {
                    email: 'mehwishnizam01@gmail.com',
                    message: 'Hello',
                    id: 'm1',
                    coachId: 'c1'
                }
            ]
        };
    },
    mutations,
    actions,
    getters

};
