import React from 'react'
import ShoppingItem from './ShoppingItem'
import './ShoppingList.css'
export default function ShoppingList(props) {
  console.log(props)
  return (
    <ul className='shopping-list'>
      {props.items.map((item, i) =>
        <ShoppingItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      )}
    </ul>
  )
}

ShoppingList.defaultProps = {
  items: []
}