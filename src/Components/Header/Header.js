import React from "react";
import "./Header.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { app } from "../Base/Base";
import logo from "../Images/dma.png";
import { useHistory } from "react-router-dom";

function Header() {
  const hist = useHistory();

  const handleLogOut = async () => {
    const NewUser = app.auth().signOut();

    if (NewUser) {
      hist.push("/");
    }
  };

  return (
    <div className="grneralHeader">
      <div className="subGeneralHeader">
        <Link to="/home">
          <img src={logo} alt="" width="100px" />
        </Link>

        <Button onClick={handleLogOut}>Log Out</Button>
      </div>
    </div>
  );
}

export default Header;
