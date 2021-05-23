import React from "react";
import "./TheShare.css";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Copy from "../Copying/Copy";
import { Button, Input } from "antd";
import { app } from "../Base/Base";
import { Link } from "react-router-dom";

const ShearPG = app.firestore().collection("DMA-Authers");
function TheShare() {
  const [bookURL, setBookURL] = React.useState("");
  const [bookQuote, setBookQuote] = React.useState("");
  const [bookHashTag, setBookHashTag] = React.useState("");
  const [whatAppURL, setWhatAppURL] = React.useState("");
  const [whatAppQuote, setWhatAppQuote] = React.useState("");
  const [getFaceBook, setGetFaceBook] = React.useState([]);
  const [whatAppGet, setWhatAppGet] = React.useState([]);
  const [convertImage, setConvertImage] = React.useState(null);
  const [getconvertImage, setGetConvertImage] = React.useState([]);

  const UploadImageConvert = async (e) => {
    const fileRef = e.target.files[0];
    const storageRef = app.storage().ref();
    const childRef = storageRef.child(fileRef.name);
    await childRef.put(fileRef);
    setConvertImage(childRef.getDownloadURL());
  };

  const UploadingConvertImg = async () => {
    const NewUser = await app.auth().currentUser;
    if (NewUser) {
      await ShearPG.doc(NewUser.uid)
        .collection("ImageConvert")
        .doc()
        .set({
          Convert: await convertImage,
          date: Date.now().toLocaleString(),
        });
    }
  };

  const GetConvertImg = async () => {
    const NewUser = app.auth().currentUser;

    if (NewUser) {
      await ShearPG.doc(NewUser.uid)
        .collection("ImageConvert")
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => {
          const Based = [];
          snapshot.forEach((doc) => {
            Based.push({ ...doc.data(), id: doc.id });
          });
          setGetConvertImage(Based);
        });
    }
  };

  const FaceBookSend = async () => {
    const NewUser = await app.auth().currentUser;

    if (NewUser) {
      await ShearPG.doc(NewUser.uid).collection("FaceBookData").doc().set({
        bookHashTag,
        bookQuote,
        bookURL,
      });
      setBookHashTag("");
      setBookQuote("");
      setBookURL("");
    }
  };

  const WhatAppSend = async () => {
    const NewUser = await app.auth().currentUser;
    if (NewUser) {
      await ShearPG.doc(NewUser.uid).collection("WhatAppSend").doc().set({
        whatAppQuote,
        whatAppURL,
      });
      setWhatAppQuote("");
      setWhatAppURL("");
    }
  };

  const GetFbData = async () => {
    const NewUser = await app.auth().currentUser;

    if (NewUser) {
      await ShearPG.doc(NewUser.uid)
        .collection("FaceBookData")
        .onSnapshot((snapshot) => {
          const BaseBoy = [];
          snapshot.forEach((doc) => {
            BaseBoy.push({ ...doc.data(), id: doc.id });
          });
          setGetFaceBook(BaseBoy);
        });
    }
  };

  const getWhatApp = async () => {
    const NewUser = await app.auth().currentUser;

    if (NewUser) {
      await ShearPG.doc(NewUser.uid)
        .collection("WhatAppSend")
        .onSnapshot((snapshot) => {
          const Baseing = [];
          snapshot.forEach((doc) => {
            Baseing.push({ ...doc.data(), id: doc.id });
          });
          setWhatAppGet(Baseing);
        });
    }
  };

  React.useEffect(() => {
    GetFbData();
    getWhatApp();
    GetConvertImg();
  }, []);

  return (
    <div className="GeneralShareing">
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          type="file"
          style={{ marginBottom: "10px" }}
          onChange={UploadImageConvert}
        />
        <Button style={{ marginBottom: "10px" }} onClick={UploadingConvertImg}>
          Convert
        </Button>
        {getconvertImage.map(({ id, Convert }) => (
          <div
            style={{
              width: "280px",
              color: "#fff",
              textAlign: "center",
              // backgroundColor: "blue",
            }}
            key={id}
          >
            {" "}
            {Convert}{" "}
          </div>
        ))}
      </div>
      <div className="SubGeneralShearing">
        <div className="FaceBookSharing">
          <div className="FbShUpload">
            <Input
              placeholder="URL"
              className="ShInput"
              value={bookURL}
              onChange={(e) => {
                setBookURL(e.target.value);
              }}
            />
            <Input
              placeholder="Say something about this post"
              className="ShInput"
              value={bookQuote}
              onChange={(e) => {
                setBookQuote(e.target.value);
              }}
            />
            <Input
              placeholder="HashTag"
              className="ShInput"
              value={bookHashTag}
              onChange={(e) => {
                setBookHashTag(e.target.value);
              }}
            />
            <Button
              style={{
                width: "120px",
                backgroundColor: "#1773EA",
                marginTop: "5px",
                marginBottom: "10px",
                color: "#fff",
                fontWeight: "bold",
              }}
              onClick={FaceBookSend}
            >
              Send
            </Button>
            <p style={{ fontSize: "small", color: "#fff" }}>
              After Sending Click on the icon to upload
            </p>
          </div>
          <>
            {getFaceBook.map(({ id, bookHashTag, bookQuote, bookURL }) => (
              <FacebookShareButton
                url={bookURL}
                hashtag={bookHashTag}
                quote={bookQuote}
              >
                <FacebookIcon round={true} />
              </FacebookShareButton>
            ))}
          </>
        </div>
        <div className="WhatappShearing">
          <div className="FbShUpload">
            <Input
              placeholder="URL"
              className="ShInput"
              value={whatAppURL}
              onChange={(e) => {
                setWhatAppURL(e.target.value);
              }}
            />
            <Input
              placeholder="Say something about this post"
              className="ShInput"
              value={whatAppQuote}
              onChange={(e) => {
                setWhatAppQuote(e.target.value);
              }}
            />
            <Button
              style={{
                width: "120px",
                backgroundColor: "#128C7E",
                marginTop: "5px",
                marginBottom: "10px",
                color: "#fff",
                fontWeight: "bold",
              }}
              onClick={WhatAppSend}
            >
              Send
            </Button>
            <p style={{ fontSize: "small", color: "#fff" }}>
              After Sending Click on the icon to upload
            </p>
          </div>
          {whatAppGet.map(({ id, whatAppQuote, whatAppURL }) => (
            <WhatsappShareButton
              key={id}
              title={whatAppQuote}
              separator={""}
              url={whatAppURL}
            >
              <WhatsappIcon round={true} />
            </WhatsappShareButton>
          ))}
        </div>
      </div>
      <Link to="/home">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}

export default TheShare;
