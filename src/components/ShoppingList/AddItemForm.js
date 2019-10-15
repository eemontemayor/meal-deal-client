import React from 'react'
import ShoppingListApiService from '../../services/shopping-list-api-service'
export default class AddItemForm extends React.Component {






    onSubmitForm = (e) => {
        e.preventDefault()
        const item = {}
        
         item.name = e.target.itemToAdd.value
        
        console.log(item)
        ShoppingListApiService.postItem(item)
        
        this.props.onAddItem(e.target.itemToAdd.value)
      }

    render() {
      return (
        <form onSubmit={this.onSubmitForm}>
          <input
            name='itemToAdd'
            type='text'
            placeholder='food stuff'
            aria-label='Shopping list item'
            
          />
          <button type='submit'>Add Item</button>
        </form>
      )
    }
  }