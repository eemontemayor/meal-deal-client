import config from '../config';
import TokenService from './token-service';


const ShoppingListApiService = {
    getAllItems(){
        return fetch(`${config.API_ENDPOINT}/shoppinglist`,{
            method:'GET',
            headers:{
              'content-type':'application/json',
              'authorization':`bearer ${TokenService.getAuthToken()}`,
            },
          })
          .then((itemRes) => { 
            if (!itemRes.ok)
              return itemRes.json().then(e => Promise.reject(e))
              return itemRes.json()
          })
          .catch(error => {
            console.log({error})
        })

    },

    postItem(item){
        console.log(item)
        return fetch(`${config.API_ENDPOINT}/shoppinglist`,{ 
            method: 'POST',
            headers:{
              'content-type':'application/json',
              'authorization':`bearer ${TokenService.getAuthToken()}`,
            },
            body:JSON.stringify(item)
    
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
    deleteItem(item){
      return fetch(`${config.API_ENDPOINT}/shoppinglist`, { 
        method: 'DELETE',
        headers:{
          'content-type':'application/json',
        },
        body: JSON.stringify(item)
      })
    }
}
export default ShoppingListApiService;