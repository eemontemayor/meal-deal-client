import React, { Component } from "react";
import "./PlannerPage.css";
import BookMarks from "../../components/BookMarks/BookMarks";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchForm from "../../components/SearchForm/SearchForm";
import MealContext from "../../contexts/MealContext";
import MealApiService from "../../services/meal-api-service";
import "react-calendar/dist/Calendar.css";
import BigCalendar from "../../components/Calendar/BigCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MOD from "../../components/MOD/MOD";
export default class PlannerPage extends Component {
  state = {
    view: "bm",
    date: new Date(),
    today: new Date(),
    searchResults: [],
    meals: []
  };
  static contextType = MealContext;
  componentDidMount() {
    MealApiService.getUserMeals()
      .then(this.context.setUserMeals)
      .catch(this.context.setError);
  }

  handleClick = x => {
    this.setState({
      view: x
    });
  };

  saveSearchResults = arr => {
    this.setState({
      searchResults: arr
    });
  };

  render() {
    return (
      <div className="planner-page">
        <div className="calendar-container">
          <BigCalendar />
        </div>
        <div className="mod-container">
          <MOD />
        </div>
        <div className="search-form-container">
          <button
            onClick={() => this.handleClick("bm")}
            className={
              this.state.view === "sf"
                ? "search-form-btn"
                : "search-form-btn disabled"
            }
          >
            {" "}
            <FontAwesomeIcon
              className="icon bookmark"
              size="1x"
              icon="bookmark"
            />
          </button>
          <button
            onClick={() => this.handleClick("sf")}
            className={
              this.state.view === "bm"
                ? "search-form-btn"
                : "search-form-btn disabled"
            }
          >
            {" "}
            <FontAwesomeIcon className="icon search" size="1x" icon="search" />
          </button>
          <br />
          {this.state.view === "bm" && <h4 className='bm-header'>Bookmarks</h4>}
          {this.state.view === "sf" && (
            <SearchForm saveSearchRes={this.saveSearchResults} />
          )}
        </div>

        <div className="res-container">
          {this.state.view === "bm" && <BookMarks />}
          {this.state.view === "sf" && this.state.searchResults.length > 1 && (
            <SearchResults searchResults={this.state.searchResults} />
          )}
        </div>
      </div>
    );
  }
}
