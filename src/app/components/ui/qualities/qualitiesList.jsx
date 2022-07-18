import React from "react";
import Qualitie from "./qualities";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qual) => (
        <Qualitie key={qual._id} {...qual} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired
};

export default QualitiesList;
