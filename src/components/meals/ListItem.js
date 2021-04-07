import "./ListItem.scss";

const ListItem2 = ({
  listItemType,
  optionName,
  color,
  handleChange,
  handleClick,
  count,
  handleInput,
  value,
}) => {
  return (
    <div className={`list-item list-item-${listItemType}`}>
      <span className="option-color" style={{ backgroundColor: color }}></span>
      <p className="option-name">{optionName}</p>
      {listItemType === "display" && (
        <>
          <p className="option-percentage">50%</p>
          <p className="option-quantity">{value}</p>
        </>
      )}

      {listItemType === "checkbox" && (
        <input
          className="option-checkbox"
          type="checkbox"
          onChange={handleChange}
          onClick={handleClick}
          name={optionName}
          color={color}
        />
      )}
      {listItemType === "quantity" && (
        <input
          className="option-quantity-input"
          type="number"
          onInput={handleInput}
        />
      )}
    </div>
  );
};

export default ListItem2;
