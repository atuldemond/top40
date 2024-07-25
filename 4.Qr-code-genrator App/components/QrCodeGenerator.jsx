import React, { useState } from "react";
import QRCode from "qrcode.react";

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQrCodeValue(inputValue);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-4">QR Code Generator</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text or URL"
          className={`w-full px-3 py-2 border ${
            isDarkMode
              ? "border-gray-700 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-black"
          } rounded-md`}
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-md shadow-md"
        >
          Generate QR Code
        </button>
      </form>
      {qrCodeValue && (
        <div className="mt-10">
          <QRCode value={qrCodeValue} />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
