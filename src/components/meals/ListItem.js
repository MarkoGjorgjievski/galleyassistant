import "./ListItem.scss";

const ListItem = ({
  listItemType,
  optionName,
  color,
  handleChange,
  handleClick,
  count,
  handleInput,
  value,
}) => {
  switch (listItemType) {
    case "display":
      return (
        <div className={`list-item list-item-${listItemType}`}>
          <span
            className="option-color"
            style={{ backgroundColor: color }}
          ></span>
          <p className="option-name">{optionName}</p>
          <p className="option-percentage">50%</p>
          <p className="option-quantity">96</p>
        </div>
      );

    case "checkbox":
      return (
        <div className={`list-item list-item-${listItemType}`}>
          <span
            className="option-color"
            style={{ backgroundColor: color }}
          ></span>
          <p className="option-name">{optionName}</p>
          <input
            className="option-checkbox"
            type="checkbox"
            onChange={handleChange}
            onClick={handleClick}
            name={optionName}
            color={color}
          />
        </div>
      );

    case "quantity":
      return (
        <div className={`list-item list-item-${listItemType}`}>
          <span
            className="option-color"
            style={{ backgroundColor: color }}
          ></span>
          <p className="option-name">{optionName}</p>
          <input
            className="option-quantity-input"
            type="number"
            onInput={handleInput}
          />
        </div>
      );
    default:
      break;
  }
};

export default ListItem;
