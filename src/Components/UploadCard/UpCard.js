import React, { useEffect, useState } from "react";
import "./UpCard.css";
import gitlogo from "../Images/gitround.png";
import { app } from "../Base/Base";

const ProjectGet = app.firestore().collection("DMA-Authers");
function UpCard() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    const NewUser = app.auth().currentUser;
    if (NewUser) {
      await ProjectGet.doc(NewUser.uid)
        .collection("Projects")
        .orderBy("date", "desc")
        .onSnapshot((snap) => {
          const item = [];
          snap.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setUploads(item);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {uploads.map(({ id, avatar, title, content, gitLink, projectLink }) => (
        <div>
          <a
            href={projectLink}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="UpMainCard" key={id}>
              <img src={avatar} className="UpVidDiv" alt="" />
              <div className="UpImgTxtHod">
                <a href={gitLink}>
                  {" "}
                  <img src={gitlogo} alt="" className="IconDiv" />
                </a>
                <div className="ProjTitle"> {title} </div>
                <div className="ProjContent"> {content} </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

export default UpCard;
