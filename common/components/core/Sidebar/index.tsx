import React from "react";
import style from "@styles/modules/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as farHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// TODO: Error imported icons regular or outlined

const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
      <div className="sidebar-user"></div>
      <ul className="sidebar-nav">
        {/* <li><FontAwesomeIcon icon={farHouse} /> Clientes</li> */}
        <li>
          <Link href={"/clientes"}>Clientes</Link>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {/* <li>Usuarios</li>
        <li>Viajes</li>
        <li>Buses</li> */}
      </ul>
    </nav>
  );
};

export default Sidebar;
