import React from "react";
import { ArrowLeft } from "lucide-react";
import "./Header.css";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  isBack: boolean;
  href?: string;
}

const Header: React.FC<Props> = ({ title, isBack, href }) => {
  return (
    <div className="Header">
      {isBack ? (
        <NavLink to={href}>
          <ArrowLeft size={20} />
        </NavLink>
      ) : (
        <></>
      )}
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
