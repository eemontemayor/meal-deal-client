import config from '../config';
import TokenService from './token-service';

const MealApiService = {
  getExplorerMeals(x) {
      // return fetch(`https://api.edamam.com/search?q=${x}&app_id=${config.APP_ID}&app_key=${config.API_KEY}`, { 
        return fetch(`https://api.edamam.com/search?q=${x}&app_id=108438ee&app_key=9fa106c05de3b6d9c71df9aecbab94e6`, { 
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
      })
    },

    postMeal(x){
     
      return fetch(`${config.API_ENDPOINT}/meals`,{ 
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




    deleteMeal(meal){
      return fetch(`${config.API_ENDPOINT}/meals`, { 
        method: 'DELETE',
        headers:{
          'content-type':'application/json',
        },
        body: JSON.stringify(meal)
      })
      // .then(res => { 
      //   (!res.ok)
      //     ? res.json().then(e => Promise.reject(e))
      //     : res.json()
      // })
      // .catch(error => {
      //   console.log({error})
      // })
    },
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
      // .then(res => { 
      //   (!res.ok)
      //     ? res.json().then(e => Promise.reject(e))
      //     : res.json()
      // })
      // .catch(error => {
      //   console.log({error})
      // })
    },

};
export default MealApiService;