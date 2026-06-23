import React from "react";

function Item({ item, deleteItem, editItem }) {
    return (
        <li>
        {item.value}
        <button onClick={() => editItem.item}>Editar</button>
        <button onClick={() => deleteItem.item}>Eliminar</button>
        </li>
    );
}

export default Item;