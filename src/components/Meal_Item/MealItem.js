import React, { Component } from "react";
import MealContext from "../../contexts/MealContext";
import { Link } from "react-router-dom";
import "./MealItem.css";
// import EditMealItem from './EditMealItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class MealItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      instructions: [],
      image: "",
      viewIngredients:false
    };
  }
  static contextType = MealContext;

  componentDidMount() {
   
  }

//   handleViewIngredients=()=>{
//     this.setState({
//         viewIngredients:!this.state.viewIngredients
//     },()=>{
//         console.log(this.state)
//     })
// }


  renderButtons = () => {
 
    if (this.props.bookMark=== true) {
      return (
        <div className="item-buttons">
          <button
            className="del-btn"
            onClick={() =>
              this.context.handleDeleteBookmark(
                this.props.meal,
                this.props.index
              )
            }
          >
            {" "}
            <FontAwesomeIcon
              className="icon trash"
              size="1x"
              icon="trash-alt"
            />
          </button>
          <Link to={`/bookmark/${this.props.meal.id}`}>
            {" "}
            <button className="see-more-btn">...</button>{" "}
          </Link>{" "}
          {/* have to pass this.props.meal.id here to avoid pkey constraint between md and bm */}
          <button
            className="add-btn"
            onClick={() => this.context.postMeal(this.props.meal)}
          >
            {" "}
            <FontAwesomeIcon className="icon plus" size="1x" icon="plus" />
          </button>
        </div>
      );
    }

    if (this.props.mod === true) { 
      return (
        <div className="item-buttons">
        <button
          className="del-btn"
          onClick={() =>
            this.context.handleDeleteMeal(
              this.props.meal,
              this.props.index
            )
          }
        >
          {" "}
          <FontAwesomeIcon
            className="icon trash"
            size="1x"
            icon="trash-alt"
          />
        </button>
        <Link
            to={`/meal/${this.context.formattedDate}/${this.props.meal.id}`}
          >
          {" "}
          <button className="see-more-btn">...</button>{" "}
        </Link>{" "}
        {/* have to pass this.props.meal.id here to avoid pkey constraint between md and bm */}
        <button
          className="bm-btn"
          onClick={() => this.context.handleAddBookmark(this.props.meal)}
        >
          {" "}
          <FontAwesomeIcon className="icon plus" size="1x" icon="bookmark" />
        </button>
      </div>
      )
    }
    if (this.props.searchRes === true) {
      let meal = {
        meal_name: this.props.meal_name,
        image: this.props.image,
        ingredients:this.props.ingredients
      }
      return (
        <div className="item-buttons">
          <button
            className="bm-btn"
            onClick={() => this.context.handleAddBookmark(meal)}
          >
          <FontAwesomeIcon className='icon bookmark' size='1x' icon = 'bookmark'/>          </button>      
            {" "}
            <button className="see-more-btn">...</button>{" "}
         {" "}
          <button
            className="add-btn"
            onClick={() => this.context.postMeal(meal)}
          >
            {" "}
            <FontAwesomeIcon className="icon plus" size="1x" icon="plus" />
          </button>
        </div>
      );
    }
  };



  renderMealName = () => {
    if (this.props.meal_name) {
   
      return <p className="meal-name">{this.props.meal_name}</p>;
    }
    if(this.props.mod){
      return <p className="meal-name">{this.props.meal.meal_name}</p>;
    }
    if(this.props.bookMark){
      return <p className="meal-name">{this.props.meal.meal_name}</p>;
    }
  };

  renderMealImage = () => {
    if (this.props.image) {
     return <img className="meal-img" src={this.props.image} alt="x" />
    
    } else {
     return null
    }
}


  render() {


const index=this.props.index
    return (
      <li id={this.props.id ? this.props.id : null} key={index}>
        <div className={this.props.mod ===true ? 'mod-item':"meal-item"}>
    {this.renderMealImage()}

          {this.renderButtons()}
         {this.renderMealName()}

        </div>
      </li>
    );
  }
}
