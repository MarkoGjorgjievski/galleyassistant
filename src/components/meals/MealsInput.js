import { useState } from "react";
import ListItem from "./ListItem";
import "./MealsInput.scss";
import mealsAndColors from "../../utils/mealsAndColors";

const handleChange = (event) => {
  console.log(event.target.checked);
};

let mealOptions = Object.entries(mealsAndColors.main).map(([, value]) =>
  value.meals.map((meal) => {
    return (
      <ListItem
        listItemType="checkbox"
        optionName={meal}
        color={value.hex}
        key={meal}
        handleChange={handleChange}
      />
    );
  })
);

const MealsInput = () => {
  const [options, setOptions] = [];
  return (
    <div class="meals-input">
      <h5 class="meals-input-title">Meals</h5>
      <div class="meals-input-chart">
        <div class="meals-input-chart-circle"></div>
      </div>
      <div className="meals-input-list">
        <ListItem listItemType="display" optionName="Chicken" />
        <ListItem listItemType="display" optionName="Beef" />
        <ListItem listItemType="display" optionName="Vegetarian" />
        <ListItem listItemType="display" optionName="Special Meals" />
        <ListItem listItemType="display" optionName="Total" />
      </div>
      <div className="meals-input-list">
        <h5>Options</h5>
        {mealOptions}
      </div>
      <div className="meals-input-list">
        <h5>Galleys</h5>
        <ListItem listItemType="quantity" optionName="Beef" />
        <ListItem listItemType="quantity" optionName="Beef" />
        <ListItem listItemType="quantity" optionName="Beef" />
      </div>
    </div>
  );
};

export default MealsInput;
