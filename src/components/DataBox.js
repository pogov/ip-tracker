import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const DataBox = ({ label, data, postal }) => (
  <div className="data-box">
    <h4>{label}</h4>
    {postal ? (
      <p>
        {data},<br /> {postal}
      </p>
    ) : (
      <p>{data}</p>
    )}
  </div>
);

DataBox.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string,
  postal: PropTypes.string,
};

export default DataBox;
