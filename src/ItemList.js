import React from 'react';

function ItemList(props) {
  return (
    <div>
      <ul className="item-list">
        {props.list.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default ItemList;