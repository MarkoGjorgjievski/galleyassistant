import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import "./MealsInput.scss";
import mealsAndColors from "../../utils/mealsAndColors";

const MealsInput = () => {
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState({});

  const galleys = ["Forward", "Mid", "Aft"];

  const removeByKey = (myObj, deleteKey) => {
    return Object.keys(myObj)
      .filter((key) => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = myObj[current];
        return result;
      }, {});
  };

  const handleChange = (event) => {
    console.log(event);
    let hex = event.target.attributes.color.value;
    let name = event.target.name;
    let optionId = "option" + name;

    if (event.target.checked) {
      setOptions((prevOptions) => {
        return {
          ...prevOptions,
          [optionId]: {
            name,
            color: hex,
            quantity: {
              fwd: 0,
              mid: 0,
              aft: 0,
            },
          },
        };
      });
    } else {
      setOptions((prevOptions) => {
        const updatedOptions = removeByKey(prevOptions, optionId);
        return {
          ...updatedOptions,
        };
      });
    }
  };

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log(options);

  const chooseOptions = Object.entries(mealsAndColors.main).map(([, value]) =>
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

  const displayOptions = Object.entries(options).map(
    ([, { name, color, quantity }]) => {
      const sumValues = Object.values(quantity).reduce((a, b) => a + b);
      return (
        <ListItem
          listItemType="display"
          optionName={name}
          key={`${name}as3r`}
          color={color}
          value={sumValues}
        />
      );
    }
  );

  // const quantifyOptions = Object.entries(options).map(([, [name, color]]) => {
  //   return (
  //     <ListItem
  //       listItemType="quantity"
  //       optionName={name}
  //       color={color}
  //       key={`${name}-^&iur`}
  //       handleInput={handleInput}
  //     />
  //   );
  // });

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
        {chooseOptions}
      </div>
      <div className="meals-input-list">
        <h5>Galleys</h5>
        {galleys.map((galley) => {
          return (
            <div>
              <h5>{galley}</h5>
              {/* {quantifyOptions} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealsInput;
