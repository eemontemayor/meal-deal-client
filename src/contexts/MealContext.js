import React from 'react';

const MealContext = React.createContext({
    userMeals: [],
    bookmarks:[],
    MOD: [],
  
    error: null,
    setError: () => {},
    clearError: () => {},
    addMeal: ()=>{},
    handleSubmit: ()=>{},
   

})
export default MealContext

// export class MealProvider extends Component{
//     state = {
//         userMeals: [],
//         bookmarks:[],
//         MOD: [],
//         error: null,
//     };
    
//     setBookmarkList = bookmarks => {
//         this.setState({ bookmarks })
//       }
//       setMODList = MOD => {
//         this.setState({ MOD })
//       }
//       setUserMeals = userMeals => {
//         this.setState({ userMeals })
//       }
//   setError = error => {
//     console.error(error)
//     this.setState({ error })
//   }

//   clearError = () => {
//     this.setState({ error: null })
//   }
    
    
//   render() {
//     const value = {
//         userMeals: this.state.userMeals,
//         bookmarks:this.state.bookmarks,
//         MOD: this.state.MOD,
//       error: this.state.error,
//       setError: this.setError,
//       clearError: this.clearError,
//         setMODList: this.setMODList,
//         setUserMealsList: this.setUserMeals,

//         setBookmarkList: this.setBookmarkList,

//     }
//     return (
//       <MealContext.Provider value={value}>
//         {this.props.children}
//       </MealContext.Provider>
//     )
//   }
// }

