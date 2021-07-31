export default {
    getCoaches(state){
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length>0
    },
    isCoach(_,getters,_2,rootGetters){
        const coaches = getters.getCoaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id===userId)
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch;
        const currentTimestamp = new Date().getTime();
        if(!lastFetch){
            return true
        }
        else{
            console.log((currentTimestamp - lastFetch) / 1000 > 60);
            return ((currentTimestamp-lastFetch) / 1000 > 60);
        }
        
    }
}