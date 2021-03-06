import React , {Component} from 'react';
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import AddItemForm from '../../components/ShoppingList/AddItemForm'
import './ShoppingListPage.css'
import ShoppingListApiService from '../../services/shopping-list-api-service';
import ShoppingListService from '../../services/shopping-list-api-service'

export default class ShoppingListPage extends Component{


    state = {
        shoppingItems: [
          /* put stub items in here for testing */
        //   { name: 'eggs', checked: false },
          { name: 'fruit', checked: true },
          { name: 'wine', checked: false },
        ]
      };
    componentDidMount(){
        ShoppingListService.getAllItems()
        .then(items=>{
            console.log(items)

            this.setState({
                shoppingItems:[{ name: 'wine', checked: false },...items]
            },()=>{
               console.log(this.state)
           }
        )
        })
    }

   
    
      handleAddItem = (itemName) => {
        const newItems = [
          ...this.state.shoppingItems,
          { name: itemName, checked: false }
        ]
        this.setState({
          shoppingItems: newItems
        })
      }
    
      handleDeleteItem = (item) => {
        ShoppingListApiService.deleteItem(item)
        const newItems = this.state.shoppingItems.filter(itm => itm !== item)
        this.setState({
          shoppingItems: newItems
        })
      }
      handleCheckItem = (item) => {
        const newItems = this.state.shoppingItems.map(itm => {
          if (itm === item) {
            itm.checked = !itm.checked
          }
          return itm
        })
        this.setState({
          shoppingItems: newItems
        })
      }
    




    render(){
      const items=this.state.shoppingItems
    
        return(
            <div className= 'shopping-list-page'>
  
          <h1>Shopping List</h1>
        
         <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList 
            items={items} 
            onDeleteItem={this.handleDeleteItem}
            onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
            </div>
        )
    }
}