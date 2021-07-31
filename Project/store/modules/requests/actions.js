
export default {
    async addRequest(context, payload){
        const newRequest ={
            email: payload.email,
            message: payload.message
        }
        const response = await fetch(`https://learning-vue-40341-default-rtdb.firebaseio.com/messages/${payload.coachId}.json`,{
            method:'POST',
            body: JSON.stringify(newRequest)
        });
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to send data');
            throw error;
        }
        newRequest.id = responseData.name;
       
        context.commit('addRequest', newRequest)
    },
    async fetchRequests(context){
      const coachId = context.rootGetters.userId;
      const response = await fetch(`https://learning-vue-40341-default-rtdb.firebaseio.com/messages/${coachId}.json`);
      const responseData = await response.json();
      if(!response.ok){
          const error = new Error(responseData.message||'Failed to fetch');
          throw error;
      }
      const requests = [];
      for(const key in responseData){
          const request = {
              id: key,
              coachId: coachId,
              email: responseData[key].email,
              message: responseData[key].message
          }
          requests.push(request);
      }
      context.commit('setRequests',requests);
    }
};