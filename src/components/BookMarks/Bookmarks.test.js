import React from 'react'
import ReactDOM from 'react-dom'
import Bookmarks from './Bookmarks';


describe(`Bookmarks Component`, ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Bookmarks/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})