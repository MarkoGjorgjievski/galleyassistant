import "./ListItem.scss";

const ListItem2 = ({
  listItemType,
  optionName,
  color,
  handleChange,
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
        <div class="checkbox-wrapper">
          <label class="switch">
            <input
              className="option-checkbox"
              type="checkbox"
              onChange={handleChange}
              name={optionName}
              color={color}
            />
            <span class="slider round"></span>
          </label>
        </div>
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
