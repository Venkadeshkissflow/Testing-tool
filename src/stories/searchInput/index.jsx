import React from "react";

import PropTypes from "prop-types";

export function SearchInput({ value }) {
  return <input type="search" placeholder="Search" value={value} />;
}

SearchInput.propTypes = {
  /**
   * Is this the primary data for SearchInput
   */
  value: PropTypes.string,
};
