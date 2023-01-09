import React from "react";
import style from "@styles/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as farHouse } from '@fortawesome/free-solid-svg-icons'

// TODO: Error imported icons regular or outlined

const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
      <div className="sidebar-user"></div>
      <ul className="sidebar-nav">
        {/* <li><FontAwesomeIcon icon={farHouse} /> Clientes</li>
        <li>Usuarios</li>
        <li>Viajes</li>
        <li>Buses</li> */}
      </ul>
    </nav>
  );
};

export default Sidebar;
