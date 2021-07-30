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
       const response = await fetch(`https://http-demo-87b5d-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
            method: 'PUT',
            body: JSON.stringify(coach)
        })
        const responseData = await response.json
        context.commit('registerCoach',coach);
    }
}