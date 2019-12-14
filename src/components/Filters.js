import React from "react";

const Filters = props => {
  const { handleSearchSpell, search } = props;

  return (
    <div>
      <label htmlFor="spells">
        <input
          onChange={handleSearchSpell}
          type="text"
          value={search}
          name="spells"
          placeholder="look for a spell..."
        />
      </label>
    </div>
  );
};

export default Filters;
