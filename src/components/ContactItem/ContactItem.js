import React from "react";

export default function ContactItem({ item, onDelete }) {
  function deleteClickHandler(e) {
    e.stopPropagation();
    onDelete(item.id);
  }
  return (
    <tr>
      <th scope="row">{item.name}</th>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>
        <button type="button" className="btn btn-outline-info" onClick={deleteClickHandler}>
          Удалить
        </button>
      </td>
    </tr>
  );
}
