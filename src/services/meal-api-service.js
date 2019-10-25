import config from '../config';
import TokenService from './token-service';

const MealApiService = {
  getExplorerMeals(x) {
      return fetch(`https://api.edamam.com/search?q=${x}&app_id=${config.APP_ID}&app_key=${config.API_KEY}`, { 
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        );
  },

  getUserMeals(){
    return fetch(`${config.API_ENDPOINT}/meals`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then((mealsRes) => {
        if (!mealsRes.ok)
          return mealsRes.json().then(e => Promise.reject(e))
        return mealsRes.json()
      })
      .catch(error => {
        console.error({error})
      })
   
    },

    findMealByDate(date){
      console.log(date)
      return fetch(`${config.API_ENDPOINT}/meals/${date}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then((mealsRes) => {
        if (!mealsRes.ok)
          return mealsRes.json().then(e => Promise.reject(e))
        return mealsRes.json()
      })
      .catch(error => {
        console.error({error})
        console.log('here')
      })
    },

    // postMeal(x){
     
    //   return fetch(`${config.API_ENDPOINT}/meals`,{ 
    //     method: 'POST',
    //     headers:{
    //       'content-type':'application/json',
    //       'authorization':`bearer ${TokenService.getAuthToken()}`,
    //     },
    //     body: JSON.stringify(x)

    //   })
    //   .then(res => { 
    //     (!res.ok)
    //       ? res.json().then(e => Promise.reject(e))
    //       : res.json()
    //   })
    //   .catch(error => {
    //     console.log({error})
    //   })
    // },

//TODO: MAKE RESTFUL


    postMeal(meal, date){
     
      return fetch(`${config.API_ENDPOINT}/meals/${date}`,{ // should i add date to this endpoint
        method: 'POST',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(meal)

      })
      .then(res => { 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      .catch(error => {
        console.log({error})
      })
    },




    deleteMeal(meal){
      return fetch(`${config.API_ENDPOINT}/meals`, { 
        method: 'DELETE',
        headers:{
          'content-type':'application/json',
        },
        body: JSON.stringify(meal)
      })
    },


//TODO: MAKE RESTFUL
    // deleteMeal(meal_id, date){
    //   return fetch(`${config.API_ENDPOINT}/meals/{date}/{meal_id}`, { // should i add date to this endpoint
    //     method: 'DELETE',
    //     headers:{
    //       'content-type':'application/json',
    //     },
    //     
    //   })
      // .then(res => { 
      //   (!res.ok)
      //     ? res.json().then(e => Promise.reject(e))
      //     : res.json()
      // })
      // .catch(error => {
      //   console.log({error})
      // })
    // },





    getBookmarks(){
      
      return fetch(`${config.API_ENDPOINT}/bookmarks`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then((mealsRes) => {
        if (!mealsRes.ok)
          return mealsRes.json().then(e => Promise.reject(e))
        return mealsRes.json()
      })
      .catch(error => {
        console.error({error})
      })
    },
    postBookmark(x){
     
      return fetch(`${config.API_ENDPOINT}/bookmarks`,{ 
        method: 'POST',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(x)

      })
      .then(res => { 
       
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      .catch(error => {
        console.log({error})
      })
    },
    deleteBookmark(meal){
      return fetch(`${config.API_ENDPOINT}/bookmarks`, { 
        method: 'DELETE',
        headers:{
          'content-type':'application/json',
        },
        body: JSON.stringify(meal)
      })
   
    },

//TODO: MAKE RESTFUL make sure you pass in id and not the whole meal
    // deleteBookmark(bookmark_id){
    //   return fetch(`${config.API_ENDPOINT}/bookmarks/{bookmark_id}`, { 
    //     method: 'DELETE',
    //     headers:{
    //       'content-type':'application/json',
    //     },
    //    
    //   })
      // .then(res => { 
      //   (!res.ok)
      //     ? res.json().then(e => Promise.reject(e))
      //     : res.json()
      // })
      // .catch(error => {
      //   console.log({error})
      // })
    // },
};
export default MealApiService;