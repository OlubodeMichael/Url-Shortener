import React, { useState } from "react";
import Button from "./Button";
import QRCode from "react-qr-code";

export function Qr() {
  const [input, setInput] = useState("");
  const [showQr, setShowQr] = useState(false);

  function handleClick() {
    // Toggle the state of showQr when the button is clicked
    setShowQr(true);

  }

  return (
    <div className="max-h-screen flex flex-col items-center justify-center">
      <div className="mt-32 mb-6">
        {showQr && input && (
          <QRCode size={256} value={input} viewBox={`0 0 256 256`} />
        )}
      </div>
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <input
          type="text"
          placeholder="Paste your Link here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        {input && (
          <Button onClick={handleClick}>Generate QR Code</Button>
        )}
      </div>
      
    </div>
  );
}
