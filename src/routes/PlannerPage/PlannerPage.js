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
    searching: false,
    searchResults:[]

  };
  static contextType = MealContext;
  componentDidMount() {}

  handleClick = () => {
    console.log("here");
    this.setState({
      searching: !this.state.searching
    });
  };


  saveSearchResults = (arr) =>{
    this.setState({
        searchResults:arr
    }, () => {
        console.log(this.state,'<---------')
    })
  }


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
            className='search-form-btn'
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
            className='search-form-btn'
            // {${!this.state.searching ? `null` : ${`disabled`}}
          >
            {" "}
            <FontAwesomeIcon className="icon search" size="1x" icon="search" />
          </button><br/>
          {this.state.searching && <SearchForm saveSearchRes={this.saveSearchResults }/>}
   
        </div>
        <div className="res-container">
          {!this.state.searching && <BookMarks />}
        {this.state.searching&&this.state.searchResults.length>1&& <SearchResults searchResults={this.state.searchResults}/>}
        </div>
      </div>
    );
  }
}
