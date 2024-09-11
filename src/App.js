import React, { useState } from "react";
import Create from "./components/Create";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import { HiArrowLeft } from "react-icons/hi";

const App = () => {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );
  const [openForm, setOpenForm] = useState(false);
  console.log(entries);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.id) {
      const updatedEntries = entries.map((entry) =>
        entry.id === values.id ? values : entry
      );
      setEntries(updatedEntries);
      localStorage.setItem("entries", JSON.stringify(updatedEntries));
    } else {
      values.id = uuidv4();
      setEntries([values, ...entries]);
      localStorage.setItem("entries", JSON.stringify([values, ...entries]));
    }
    setOpenForm(false);
  };

  console.log({ entries });

  const [values, setValues] = useState(null);

  const handleInputchange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleEdit = (entry) => {
    setValues(entry);
    setOpenForm(true);
  };

  const handleDelete = (id) => {
    const filteredEntries = entries.filter((entry) => entry.id !== id);
    setEntries(filteredEntries);
    localStorage.setItem("entries", JSON.stringify(filteredEntries));
  };

  return (
    <div className="container">
      <div className="header">
        {openForm ? (
          <div className="back_to_list" onClick={() => setOpenForm(false)}>
            <HiArrowLeft /> View Entries
          </div>
        ) : (
          <div></div>
        )}
        {openForm ? (
          <div></div>
        ) : (
          <button
            className="add-entry"
            onClick={() => {
              setOpenForm(true);
              setValues({
                name: "",
                sectors: [],
                agree_to_terms: false,
              });
            }}
          >
            New Entry
          </button>
        )}
      </div>
      {openForm ? (
        <Create
          values={values}
          handleInputchange={handleInputchange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <List
          entries={entries}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default App;
