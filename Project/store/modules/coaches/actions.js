export default {
    async registerCoach(context,data){
        const userId = context.rootGetters.userId
        const coach ={
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description: data.description,
            hourlyRate: data.rate
        }
       //const response = await fetch(`https://http-demo-87b5d-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
       const response = await fetch(`https://learning-vue-40341-default-rtdb.firebaseio.com/coaches/${userId}.json`,{  
       method: 'PUT',
            body: JSON.stringify(coach)
        })
       // const responseData = await response.json()
        if(!response.ok){
            const error = new Error( "Failed to send data");
            throw error;
        }
        else{
            context.commit("registerCoach", {
                ...coach,
                id: userId
            });
        }  
    },
    async loadCoaches(context, payload){
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
          return;
        }
          //const response = await fetch(`https://http-demo-87b5d-default-rtdb.firebaseio.com/coaches.json`);
          const res = await fetch(
            "https://learning-vue-40341-default-rtdb.firebaseio.com/coaches.json"
          );
         const resData = await res.json();
         if(!res.ok){
             const error = new Error(resData.message || 'Failed to fetch');
             throw error;
         }
         else{
             const coaches = [];
             for(const key in resData){
                 const coach = {
                   id: key,
                   firstName: resData[key].firstName,
                   lastName: resData[key].lastName,
                   areas: resData[key].areas,
                   description: resData[key].description,
                   hourlyRate: resData[key].hourlyRate
                 };
                 coaches.push(coach);
             }
             context.commit("setCoaches", coaches);
             context.commit("setFetchTimeStamp");
         }
    }
}