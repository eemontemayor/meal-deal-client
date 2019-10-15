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
            (!itemRes.ok)
              ? itemRes.json().then(e => Promise.reject(e))
              : itemRes.json()
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
}
export default ShoppingListApiService;