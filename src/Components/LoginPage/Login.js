import React from "react";
import "antd/dist/antd.css";
import "./Login.css";
import { Input } from "antd";
import { Button } from "antd";
import { app } from "../Base/Base";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";

const AuthBasePush = app.firestore().collection("DMA-Authers");
function Login() {
  const hist = useHistory();
  const [hasAccount, setHasAccount] = React.useState(false);
  const [ImageURL, setImageURL] = React.useState(null);
  const [name, setName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [stark, setStark] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const HandlingAccount = () => {
    setHasAccount(!hasAccount);
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const ImageUpload = async (e) => {
    const fileRef = e.target.files[0];
    const storageRef = app.storage().ref();
    const childref = storageRef.child(fileRef.name);
    await childref.put(fileRef);
    setImageURL(await childref.getDownloadURL());
  };

  const SignUp = async () => {
    clearErrors();
    const NewUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });

    if (NewUser) {
      await AuthBasePush.doc(NewUser.user.uid).set({
        Avatar: await ImageURL,
        Name: name,
        UserName: userName,
        Email: email,
        Password: password,
        Stark: stark,
        Bio: bio,
      });
      setImageURL(null);
      setName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setStark("");
      setBio("");
      setEmailError("");
      setPasswordError("");
      // alert("Logged in sucessfully");
      hist.push("/home");
    }
  };

  const SignIn = async () => {
    clearErrors();
    const User = await app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });

    if (User) {
      // alert("Signed In");
      hist.push("/home");
    }
  };

  return (
    <div className="GeneralLoginDiv">
      <div className="SubGeneralLoginDiv">
        <div className="ContentHold">
          {hasAccount ? (
            <div className="ContentHold">
              {" "}
              <div style={{ color: "#ddd" }}>Email</div>
              <Input
                className="InputDiv"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p style={{ color: "red", fontSize: "11px" }}> {emailError} </p>
              <div style={{ color: "#ddd" }}>Password</div>
              <Input
                className="InputDiv"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                {passwordError}{" "}
              </p>
              <div>
                <>
                  <div
                    style={{
                      width: "300px",
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        backgroundColor: "#4081ec",
                      }}
                      onClick={SignIn}
                    >
                      Sign In
                    </Button>
                    <p style={{ color: "#ddd" }}>
                      Don't Have An Account ?{" "}
                      <span
                        style={{ color: "yellow", cursor: "pointer" }}
                        onClick={HandlingAccount}
                      >
                        Sign Up
                      </span>
                    </p>
                  </div>
                </>
              </div>{" "}
            </div>
          ) : (
            <div className="ContentHold">
              <div style={{ color: "#ddd" }}>Uoload an Image</div>
              <Input className="InputDiv" type="file" onChange={ImageUpload} />
              <div style={{ color: "#ddd" }}>Name</div>
              <Input
                className="InputDiv"
                placeholder="Your Names"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div style={{ color: "#ddd" }}>UserName</div>
              <Input
                className="InputDiv"
                placeholder="What you'll love us call you"
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <div style={{ color: "#ddd" }}>Email</div>
              <Input
                className="InputDiv"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p style={{ color: "red", fontSize: "11px" }}> {emailError} </p>
              <div style={{ color: "#ddd" }}>Password</div>
              <Input
                className="InputDiv"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                {passwordError}{" "}
              </p>
              <div style={{ color: "#ddd" }}>Your Stark</div>
              <Input
                className="InputDiv"
                placeholder="e:g: i'm a Javascript Developer"
                type="text"
                value={stark}
                onChange={(e) => {
                  setStark(e.target.value);
                }}
              />
              <div style={{ color: "#ddd" }}>Tell us more about you</div>
              <TextArea
                className="InputDiv"
                placeholder="Short Bio"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
              <div>
                <>
                  <div
                    style={{
                      width: "300px",
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        backgroundColor: "#4081ec",
                      }}
                      onClick={SignUp}
                    >
                      Sign Up
                    </Button>
                    <p style={{ color: "#ddd" }}>
                      Don't Have An Account ?{" "}
                      <span
                        style={{ color: "yellow", cursor: "pointer" }}
                        onClick={HandlingAccount}
                      >
                        Sign In
                      </span>
                    </p>
                  </div>
                </>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
