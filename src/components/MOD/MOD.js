import React, { Component } from "react";
import MealItem from "../Meal_Item/MealItem";
import MealContext from "../../contexts/MealContext";
import "../Meal_Item/MealItem.css";
import "./Mod.css";
import dateFormat from "dateformat";
import AddMealForm from "../../components/AddMealForm/AddMealForm";
// import MealApiService from "../../services/meal-api-service";
export default class MOD extends Component {
  static contextType = MealContext;

  componentDidMount() {
    //  MealApiService.findMealByDate(this.context.formattedDate)
    //    .then(this.context.setMODList)
    //   .catch(this.context.setError)
  }

  renderMODList = mealArr => {
    const meals = mealArr;
    if (meals === undefined || meals === [] || meals.length < 1) {
      return (
        <li key="0">
          <AddMealForm />
        </li>
      );
    } else if (meals.length < 3) {
      let form = (
        <li key="0">
          <AddMealForm />
        </li>
      );
      let mod = meals.map((item, index) => (
        <MealItem
          meal={item}
          key={index}
          index={index}
          image={item.image}
          mod={true}
        />
      ));
      let result = (
        <>
          {form} {mod}
        </>
      );

      return result;
    } else {
      return meals.map((item, index) => {
        return (
          <MealItem
            meal={item}
            key={index}
            index={index}
            image={item.image}
            mod={true}
          />
        );
      });
    }
  };
  render() {
    const ModList = this.renderMODList(this.context.MOD);
    const { error } = this.context;
    const date = dateFormat(this.context.day, "mm/dd");
    return (
      <>
        <p className="mod-day">{date}</p>
        <ul className="mod-list">
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            ModList
          )}
        </ul>
        <p className="mod-day">{date}</p>
      </>
    );
  }
}
