import React, { Component } from "react";
import "./PlannerPage.css";
// import {Section} from '../../components/Utils/Utils'
import dateFormat from "dateformat";
import BookMarks from "../../components/BookMarks/BookMarks";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchForm from "../../components/SearchForm/SearchForm";
import MealContext from "../../contexts/MealContext";

import "react-calendar/dist/Calendar.css";
import BigCalendar from "../../components/Calendar/BigCalendar";
import { StyledButton } from "../../components/Button/Button";
import { SecondaryButton } from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PlannerPage extends Component {
  state = {
    searching: false
  };
  static contextType = MealContext;
  componentDidMount() {}

  handleClick = () => {
    console.log("here");
    this.setState({
      searching: !this.state.searching
    });
  };

  render() {
    const day = dateFormat(this.props.value, "mm/dd/yy");
    const formattedDay = dateFormat(day, "ddd");

    return (
      <div className="planner-page">
        <div className="calendar-container">
          <BigCalendar />
        </div>

        <div className="search-form-container">
          <button onClick={this.handleClick}
            // {`${this.state.searching ? null : 'disabled'}`}
          >
            {" "}
            <FontAwesomeIcon
              className="icon bookmark"
              size="1x"
              icon="bookmark"
            
            />
          </button>
          <button onClick={this.handleClick}
            // {${!this.state.searching ? `null` : ${`disabled`}}
          >
            {" "}
            <FontAwesomeIcon className="icon search" size="1x" icon="search" />
          </button>
          {this.state.searching && <SearchForm />}
          {/* <div className='form-buttons'>
                         <button className={`add-meal-form-btn ${this.state.view==='add-meal-form'?'selected':''}`} id='add-meal-form' onClick={this.handleClick} >Add Meal</button>
                         <button className={`bookmarks-btn ${this.state.view==='bookmarks'?'selected':''}`} id='bookmarks'onClick={this.handleClick}>BookMarks</button>
                         <button className={`explorer-btn ${this.state.view==='explorer'?'selected':''}`}id='explorer'onClick={this.handleClick}>Explore</button>
                     </div>
                     <div className='form-box'>
                         {this.state.view==='add-meal-form' && <AddMealForm date={day} />}
                         {this.state.view==='bookmarks' &&  <BookMarks />}
                         {this.state.view==='explorer' &&  <ExplorerForm />}
                     </div> */}
        </div>
        <div className="res-container">
          {/* {this.state.view==='add-meal-form' && <AddMealForm date={day} />} */}
          {!this.state.searching ? <BookMarks /> : <SearchResults />}
          {/* {this.state.view==='search' &&  <ExplorerForm />} */}
        </div>
      </div>
    );
  }
}
