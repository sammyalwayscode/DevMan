import React, { useState } from "react";
import "./ProjUpload.css";
import { Input, Button } from "antd";
import { app } from "../Base/Base";
import { useHistory } from "react-router-dom";

const ProjPush = app.firestore().collection("DMA-Authers");
function ProjUpload() {
  const hist = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [fileUrl, setFileUrl] = useState(null);

  const videoUpload = async (e) => {
    const File = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(File.name);
    console.log(File);

    await fileRef.put(File);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const UploadData = async () => {
    const NewUser = await app.auth().currentUser;
    if (NewUser) {
      await ProjPush.doc(NewUser.uid)
        .collection("Projects")
        .doc()
        .set({
          title,
          content,
          gitLink,
          projectLink,
          date: Date.now().toLocaleString(),
          avatar: await fileUrl,
        });
      hist.push("/home");
    }
  };

  const { TextArea } = Input;

  return (
    <div className="ProjectUploadControl">
      <div className="SubProjectUpload">
        <div className="ProjUploadControl">
          <div style={{ color: "#ddd" }}>
            Upload an Image that discribes your projedt
          </div>
          <input
            onChange={videoUpload}
            className="InputTextAreaDiv"
            type="file"
            style={{ backgroundColor: "gray" }}
          />

          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title Of Your Project"
            name=" name"
            className="InputTextAreaDiv"
          />

          <TextArea
            rows={4}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type="text"
            placeholder="Write A Little Discription"
            className="InputTextAreaDiv"
          />

          <Input
            placeholder="Input Your Ripo Link"
            value={gitLink}
            onChange={(e) => {
              setGitLink(e.target.value);
            }}
            className="InputTextAreaDiv"
          />

          <Input
            placeholder="Your project link... If Avaliable"
            value={projectLink}
            onChange={(e) => {
              setProjectLink(e.target.value);
            }}
            className="InputTextAreaDiv"
          />

          <Button
            onClick={() => {
              UploadData();
              // hist.push("/home")
            }}
            style={{
              color: "#fff",
              fontWeight: "bold",
              backgroundColor: "#4081ec",
            }}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjUpload;
