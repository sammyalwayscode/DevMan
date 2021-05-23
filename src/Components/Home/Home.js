import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import Header from "../Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import UpCard from "../UploadCard/UpCard";
import logo from "../Images/eight.png";
import { app } from "../Base/Base";

const UserGet = app.firestore().collection("DMA-Authers");
function Home() {
  const [getting, setGetting] = React.useState([]);

  const Getuser = async () => {
    const NewUser = await app.auth().currentUser;

    if (NewUser) {
      await UserGet.doc(NewUser.uid)
        .get()
        .then((doc) => {
          setGetting(doc.data());
        });
    }
  };

  React.useEffect(() => {
    Getuser();
  });

  return (
    <div>
      <Header />
      <div className="MainHomeDiv">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={getting && getting.Avatar}
              alt=""
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #fff",
              }}
            />
            <div style={{ color: "#fff" }}> {getting && getting.Name} </div>
          </div>

          <div className="BgContHolder">
            <Link to="/start">
              {" "}
              <Button
                style={{
                  width: "140px",
                  backgroundColor: "darkorange",
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Get Started
              </Button>
            </Link>

            <Link to="/upload">
              <Button
                style={{
                  width: "140px",
                  backgroundColor: "darkcyan",
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Upload A Project
              </Button>
            </Link>

            <Link to="/shareupload" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "140px",
                  backgroundColor: "darkred",
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Upload And Share
              </Button>
            </Link>
          </div>
        </div>
        <div className="CardPart">
          <div className="CardPWidthHold">
            <UpCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
