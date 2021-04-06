import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import "./MealsInput.scss";
import mealsAndColors from "../../utils/mealsAndColors";

const MealsInput = () => {
  const [options, setOptions] = useState({});
  const [count, setCount] = useState(0);

  const galleys = ["Forward", "Mid", "Aft"];

  const handleChange = (event) => {
    let color = event.target.attributes.color.value;
    let name = event.target.name;
    let optionNumber = "option" + count;

    if (event.target.checked || options.length === 0) {
      setOptions((prevOptions) => {
        return {
          ...prevOptions,
          [optionNumber]: [name, color],
        };
      });
    }
  };

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const displayOptions = Object.entries(options).map(([, [name, color]]) => {
    return (
      <ListItem
        listItemType="display"
        optionName={name}
        color={color}
        key={`${name}-^&as3r`}
      />
    );
  });

  const mealOptions = Object.entries(mealsAndColors.main).map(([, value]) =>
    value.meals.map((name) => {
      return (
        <ListItem
          listItemType="checkbox"
          optionName={name}
          color={value.hex}
          key={`${name}-4fw`}
          handleChange={handleChange}
          handleClick={handleClick}
          count={count}
        />
      );
    })
  );

  const quantityOptions = Object.entries(options).map(([, [name, color]]) => {
    return (
      <ListItem
        listItemType="quantity"
        optionName={name}
        color={color}
        key={`${name}-^&iur`}
        // handleInput={handleInput}
      />
    );
  });

  return (
    <div class="meals-input">
      <h5 class="meals-input-title">Meals</h5>
      <div class="meals-input-chart">
        <div class="meals-input-chart-circle"></div>
      </div>
      <div className="meals-input-list">
        {displayOptions}
        <ListItem listItemType="display" optionName="Special Meals" />
        <ListItem listItemType="display" optionName="Total" />
      </div>
      <div className="meals-input-list">
        <h5>Options</h5>
        {mealOptions}
      </div>
      <div className="meals-input-list">
        <h5>Galleys</h5>
        {galleys.map((galley) => {
          return (
            <div>
              <h5>{galley}</h5>
              {quantityOptions}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealsInput;
