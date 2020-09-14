import React from "react";
import PropTypes from "prop-types";
import "../index.css";

import DataBox from "./DataBox";

const InfoBox = ({ data }) => {
  return (
    <div className="info-box">
      <div className="info-box__container">
        <DataBox label="ip adress" data={data ? data.ip : "8.8.8.8"} />
        <DataBox
          label="location"
          data={data ? data.location.city : "Mountain View"}
          postal={data ? data.location.postalCode : "94043"}
        />
        <DataBox
          label="time zome"
          data={data ? data.location.timezone : "-07:00"}
        />
        <DataBox label="isp" data={data ? data.isp : "Google LLC"} />
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};

export default InfoBox;
