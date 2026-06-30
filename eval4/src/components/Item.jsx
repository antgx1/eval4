import React from "react";

function Item({ item, deleteItem, editItem }) {
    return (
        <li>
        {item.value}
        <button className="editar" onClick={() => editItem(item)}>Editar</button>
        <button className="eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

export default Item;