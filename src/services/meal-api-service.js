import config from '../config';
import TokenService from './token-service';

const MealApiService = {
 
  getExplorerMeals(x) {
    
    return fetch(`${config.API_ENDPOINT}/meals/explore/${x}`,{
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
    // .catch(error => {
    //   console.error({error})
    // })
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
      // console.log(date)
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
      // .catch(error => {
      //   console.error({error})
        
      // })
    },

  

//TODO: MAKE RESTFUL
findMealById(id,date){
  // console.log(date)
  return fetch(`${config.API_ENDPOINT}/meals/${date}/${id}`,{
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
  // .catch(error => {
  //   console.error({error})
  
  // })
},


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
      // .catch(error => {
      //   console.log({error})
      // })
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

    updateMeal(meal, meal_id){
      return fetch(`${config.API_ENDPOINT}/meals/edit/${meal_id}`, { 
        method: 'PATCH',
        headers:{
          'content-type':'application/json',
        },
        body: JSON.stringify(meal)
      })
      .then(res => { 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      // .catch(error => {
      //   console.log({error})
      // })

    },
//TODO: MAKE RESTFUL
    // deleteMeal(meal_id,date){
    //   return fetch(`${config.API_ENDPOINT}/meals/${date}/${meal_id}`, { // should i add date to this endpoint
    //     method: 'DELETE',
    //     headers:{
    //       'content-type':'application/json',
    //       'authorization':`bearer ${TokenService.getAuthToken()}`,
    //     },
        
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


    findBookmarkById(id){
      // console.log(date)
      return fetch(`${config.API_ENDPOINT}/bookmarks/${id}`,{
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
      // .catch(error => {
      //   console.error({error})
      //   console.log('here')
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
      // .catch(error => {
      //   console.error({error})
      // })
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
      // .catch(error => {
      //   console.log({error})
      // })
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
    updateBookmark(bookmark, id){
      
      return fetch(`${config.API_ENDPOINT}/bookmarks/edit/${id}`, { 
        method: 'PATCH',
        headers:{
          'content-type':'application/json',
          'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(bookmark)
      })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))

        return res.json()
      })
      // .catch(error => {
      //   console.error(error)
    
      // })
    },

};
export default MealApiService;