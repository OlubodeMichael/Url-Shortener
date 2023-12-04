import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <h1 className="text-2xl font-bold">URL Shortener</h1>
        </div>
        <div className="text-white flex">
          <Link to="/" className="mx-4">
            Home
          </Link>
          <Link to="/qr-code" className="mx-4">
            QR Code
          </Link>
        </div>
      </div>
    </nav>
  );
}


