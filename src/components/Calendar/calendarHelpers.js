import dateFormat from 'dateformat';

const calHelpers = {
    filterUserMealsByDate(minDate, maxDate, meals){

        let filteredMeals = meals.filter(item => dateFormat(item.on_day, 'yyyy-mm-dd') > dateFormat(minDate, 'yyyy-mm-dd') && dateFormat(item.on_day, 'yyyy-mm-dd') < dateFormat(maxDate, 'yyyy-mm-dd'))
       
        return filteredMeals
        
      
      }
}

export default calHelpers