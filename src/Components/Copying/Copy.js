import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "antd";

function Copy() {
  const [value, setValue] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  return (
    <div>
      <div
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
          setCopied(false);
        }}
      >
        {" "}
      </div>

      {/* <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <span>Copy to clipboard with span</span>
      </CopyToClipboard> */}

      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <Button>Click to Copy Your Image URL</Button>
      </CopyToClipboard>
      <br />

      {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
}
export default Copy;
