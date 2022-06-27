import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import PropTypes from "prop-types";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ columns, data: data }} />
        </>
      )}
    </table>
  );
};

Table.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.array.isRequired
};

export default Table;
