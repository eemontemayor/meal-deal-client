## THE MEAL DEAL 2.0

### link 
<a href="https://the-meal-deal.now.sh/login">live link </a>




### API documentation
    
    GET /meals    
            get all user meals

    GET /meals/:date
            get all user meals for particular day

    GET /bookmarks
            get all user bookmarked meals

    GET /shoppinglist
            get user's shoppinglist


    POST /bookmarks
            Post a meal as a saved bookmark

    POST /meals/:date
            Post a meal for a particular day

    POST /shoppinglist
            Post an item to the shopping list


    DELETE /meals/:date
            Delete meal for a particular day
    
    DELETE /bookmarks
            Delete an item from bookmark list

    DELETE /shoppinglist
            Delete an item from the shopping list

### screenshots
coming soon...


### summary
This is a meal planner app.
    
The user can browse/search for meals on the 'edamam' website 
and bookmark those meals for later.

The user can open up their calendar and click on a day.

After clicking on a day, the user can either add their own 
meals to that day or browse meals from 'edamam' and add the
meal to that particular day.



### future improvements
User will be able to edit ingredients and meal names




### technologies
This app utilizes HTML, CSS, React, Node, Express, and PostgreSQL

API used:<a href="https://developer.edamam.com/edamam-docs-recipe-api">  Edamam Recipe Search API </a>