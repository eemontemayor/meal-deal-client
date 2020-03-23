import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import LoginPage from "../../routes/LoginPage.js";
import RegistrationPage from "../../routes/RegistrationPage";
import LandingPage from "../../routes/LandingPage/LandingPage";
import Header from "../Header/Header";
import BookMarksPage from "../../routes/BookMarksPage/BookMarksPage";
import CalendarPage from "../../routes/CalendarPage/CalendarPage";
import PlannerPage from "../../routes/PlannerPage/PlannerPage";
import ExplorerPage from "../../routes/ExplorerPage/ExplorerPage";
import ShoppingListPage from "../../routes/ShoppingListPage/ShoppingListPage";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import MealItemPage from "../../routes/MealItemPage/MealItemPage";
import MealContext from "../../contexts/MealContext";
import MealApiService from "../../services/meal-api-service";
import dateFormat from "dateformat";
import SideBar from "../SideBar/SideBar";

export default class App extends Component {
  state = {
    hasError: false,
    value: new Date(),
    formattedDate: "",
    MOD: [],
    bookmarks: [],
    userMeals: []
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    // TO-DO add a Promise.all here
    const formattedDate = dateFormat(this.state.value, "yyyy-mm-dd");
    this.setState({ formattedDate }, () => {
      MealApiService.findMealByDate(formattedDate)
        .then(meals => {
          this.setState({
            MOD: meals
          });
        })
        .catch(error => {
          console.log({ error });
        });
    });

  }

  //////

  addMeal = meal => {
    console.log(meal, "from addMeal");
    this.setState({ ...this.state.userMeals, meal });
  };
  addMOD = meal => {
    this.setState({ ...this.state.MOD, meal });
  };
  addBookmark = bookmark => {
    this.setState({ ...this.state.bookmarks, bookmark });
  };
  setBookmarkList = bookmarks => {
    this.setState({ bookmarks });
  };
  setMODList = MOD => {
    this.setState({ MOD });
  };
  setUserMeals = userMeals => {
    console.log('here')
    this.setState({ userMeals });
  };
  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  getUserMeals = () => {
    MealApiService.getUserMeals()
      .then(meals => {
        this.setState({
          userMeals: meals
        });
      })
      .catch(error => {
        console.log({ error });
      });
  };

  onChange = value => {
    const formattedDate = dateFormat(value, "yyyy-mm-dd");

    this.setState({ value, formattedDate }, () => {
      MealApiService.findMealByDate(formattedDate)
        .then(this.setMODList)
        .catch(this.setError);
    });
  };

  //====================== MEAL CRUD OPERATORS ========================
  getUserMOD = () => {
    MealApiService.findMealByDate(this.state.formattedDate)
      .then(meals => {
        this.setState({
          MOD: meals
        });
      })
      .catch(error => {
        console.log({ error });
      });
  };

  postMeal = meal => {
    let name = meal.meal_name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    let newMeal = {
      id: undefined,

      meal_name: name,
      image: meal.image,
      ingredients: [meal.ingredients],
      instructions: [meal.instructions],

      on_day: this.state.formattedDate
    };

    if (this.state.MOD === undefined || this.state.MOD.length < 3) {
      MealApiService.postMeal(newMeal, this.state.formattedDate)
        .then(res => {
          this.getUserMOD();
          this.getUserMeals();
        })
        .catch(error => {
          console.log({ error });
        });
      //  .then(this.addMeal)
      // .catch(this.setError)
    } else {
      return alert("only 3 meals per day allowed");
    }
  };

  handleDeleteMeal = (meal, index) => {
    let newMOD = this.state.MOD;
    let mealList = this.state.userMeals;
    let id = meal.id;

    if (id === undefined || !id) {
      console.log("if undefined", index);
      delete newMOD[index];
      this.setState({
        MOD: newMOD
      });
    } else {
      console.log("newMod", newMOD);

      MealApiService.deleteMeal(meal)
        .then(res => {
          if (res.ok) {
            mealList = mealList.filter(i => i.id !== id);
            delete newMOD[index];

            this.setState({
              MOD: newMOD,
              userMeals: mealList
            });
          }
        })
        .catch(error => {
          console.log({ error });
        });
    }
  };
  //======================= BOOKMARK CRUD OPERATORS ================================//

  getUserBookmarks = () => {
    MealApiService.getBookmarks()
      .then(meals => {
        this.setState({
          bookmarks: meals
        });
      })
      .catch(error => {
        console.log({ error });
      });
  };

  handleAddBookmark = meal => {
    //adds to bookmark table in db

    let name = meal.meal_name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    let list = this.state.bookmarks;

    const newBookmark = {
      meal_name: name,
      ingredients: [meal.ingredients],
      image: meal.image
    };

    if (list !== undefined) {
      list = list.map(i => {
        return i.meal_name;
      });
    }
    if (list === undefined || !list.includes(newBookmark.meal_name)) {
      MealApiService.postBookmark(newBookmark)
        .then(meal => {
          MealApiService.getBookmarks()
            .then(meals => {
            this.setState({
              bookmarks: meals
            });
          });
        })
        .catch(error => {
          console.log({ error });
        });
    } else {
      alert("Meal already in bookmarks!");
    }
  };

  handleDeleteBookmark = (meal, index) => {
    let bookmarks = this.state.bookmarks;

    MealApiService.deleteBookmark(meal).then(res => {
      delete bookmarks[index];
      this.setState({
        bookmarks
      });
    });
  };

  handleUpdateBookmark = e => {
    e.preventDefault();
    console.log(e);
    // MealApiService.updateBookmark(bookmark, id)
  };

  //======================= HELPER FUNCTIONS ================================//

  goBack = () => {
    this.props.history.push("/");
  };

  render() {
    const contextValue = {
      day: this.state.value,

      formattedDate: this.state.formattedDate,
      MOD: this.state.MOD,
      bookmarks: this.state.bookmarks,
      handleDeleteMeal: this.handleDeleteMeal,
      handleAddBookmark: this.handleAddBookmark,
      handleDeleteBookmark: this.handleDeleteBookmark,
      postMeal: this.postMeal,
      onChange: this.onChange,
      userMeals: this.state.userMeals,
      goBack: this.goBack,
      handleUpdateBookmark: this.handleUpdateBookmark,
      getUserBookmarks: this.getUserBookmarks,
      getUserMOD: this.getUserMOD,
      getUserMeals: this.getUserMeals,

      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMODList: this.setMODList,
      setUserMeals: this.setUserMeals,
      setBookmarkList: this.setBookmarkList,
      addMeal: this.addMeal
      // findMealById:this.findMealById,
      // setSelectedMeal:this.setSelectedMeal
    };

    return (
      <div className="App">
        <MealContext.Provider value={contextValue}>
          <header>
            <Header />
          </header>
          <aside>
            <SideBar />
          </aside>
          <main className="App__main">
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}
            <Switch>
              <PrivateRoute exact path={"/"} component={LandingPage} />

              <PublicOnlyRoute path={"/login"} component={LoginPage} />
              <PublicOnlyRoute
                path={"/register"}
                component={RegistrationPage}
              />
              <PrivateRoute path={"/planner"} component={PlannerPage} />
              <PrivateRoute path={"/bookmarks"} component={BookMarksPage} />
              <PrivateRoute path={"/calendar"} component={CalendarPage} />
              <PrivateRoute path={"/planner/:date"} component={PlannerPage} />
              <PrivateRoute
                exact
                path={"/meal/:date/:meal_id"}
                component={MealItemPage}
              />
              <PrivateRoute
                exact
                path={"/bookmark/:bookmark_id"}
                component={MealItemPage}
              />
              <PrivateRoute path={"/explore"} component={ExplorerPage} />
              <PrivateRoute
                path={"/shoppinglist"}
                component={ShoppingListPage}
              />
              <Route component={NotFoundRoute} />
            </Switch>
          </main>
          <footer></footer>
        </MealContext.Provider>
      </div>
    );
  }
}
