import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt,faSearch,faEdit,faBookmark,faCalendarAlt,faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'
import App from './components/App/App';
import './index.css';
library.add(faPlus, faChevronLeft,faSearch, faTrashAlt,faEdit,faBookmark,faCalendarAlt, faShoppingBasket )
ReactDOM.render(<BrowserRouter>
  <UserProvider>
      <App />
    </UserProvider>
</BrowserRouter>, document.getElementById('root'));