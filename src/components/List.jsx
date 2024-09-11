import React from "react";
import { TbEdit, TbTrash } from "react-icons/tb";

const List = ({ entries, handleDelete, handleEdit }) => {
  return (
    <div style={{ padding: "0 15px" }}>
      <table>
        <tr>
          <th>Name</th>
          <th>Sectors</th>
          <th style={{ width: "85px" }}>Actions</th>
        </tr>
        {entries.length > 0 &&
          entries?.map((entry) => (
            <tr>
              <td>{entry.name}</td>
              <td>{entry?.sectors.join(", ")}</td>
              <td>
                <div className="action-btns">
                  <button onClick={() => handleEdit(entry)}>
                    <TbEdit />
                  </button>
                  <button onClick={() => handleDelete(entry.id)}>
                    <TbTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default List;
