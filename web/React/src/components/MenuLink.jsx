import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function MenuLink({ caminho, children }) {

  return (
    <div>
      <Link to={caminho}>
        <button variant="dark" className="button">{children}</button>
      </Link>
    </div>
  );
}
