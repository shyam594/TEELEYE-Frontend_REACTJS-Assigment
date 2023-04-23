import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = memo(({ isSelected, onClickHandler, text }) => {
  const className = isSelected ? 'selected' : '';

  return (
    <li className={className} onClick={onClickHandler}>
      {text}
    </li>
  );
});

SingleListItem.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          key={item.text}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          isSelected={selectedIndex === index}
        />
      ))}
    </ul>
  );
});

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: null,
};

export default List;