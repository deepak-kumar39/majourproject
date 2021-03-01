import React from "react";
import { Link } from "react-router-dom";
const ListItem = ({linkName,to}) => {
  return (
    <li className="nav-item ms-lg-5">
      <Link className="nav-link" to={to}>
        {linkName}
      </Link>
    </li>
  );
};

export default ListItem;
