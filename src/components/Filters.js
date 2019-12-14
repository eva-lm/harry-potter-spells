import React from "react";

const Filters = props => {
  const { spells } = props;

  return (
    <div>
      <label htmlFor="spells">
        <input
          onChange={props.handleSearchSpell}
          type="text"
          // value={props.search}
          name="spells"
          placeholder="look for a spell..."
        />
      </label>
    </div>
  );
};

export default Filters;
