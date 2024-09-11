import Multiselect from "multiselect-react-dropdown";
import React from "react";
import sectors from "../sectors";

const Create = ({ values, handleInputchange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={values?.name}
              onChange={(e) => handleInputchange("name", e.target.value)}
            />
          </div>
          <div className="single-input">
            <label htmlFor="sectors">Sectors</label>
            {/* <input
              id="sectors"
              type="text"
              required
              value={values?.sectors}
              onChange={(e) => handleInputchange("sectors", e.target.value)}
            /> */}
            <Multiselect
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onRemove={(newValue) => handleInputchange("sectors", newValue)}
              onSearch={function noRefCheck() {}}
              onSelect={(newValue) => handleInputchange("sectors", newValue)}
              options={sectors}
              selectedValues={values?.sectors}
            />
          </div>
          <div className="single-input-terms">
            <input
              type="checkbox"
              id="terms"
              required
              checked={values?.agree_to_terms}
              onChange={(e) =>
                handleInputchange("agree_to_terms", e.target.checked)
              }
            />
            <label htmlFor="terms">Agree to terms</label>
          </div>
          <input
            disabled={
              !values.name || !values.agree_to_terms || !values.sectors.length
            }
            type="submit"
            value={values?.id ? "Update" : "Add"}
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
