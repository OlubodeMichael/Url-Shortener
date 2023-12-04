import React, { useState } from "react";
import Button from "./Button";
import Image from "./image.svg";

export function Shortener() {
  const [loader, setLoader] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setErrorMessage] = useState(null);

  const fetchData = async () => {
    try {
      setLoader(true);
  
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      setLoader(false);
      setResult(data.result.full_short_link);
      setInput("");
    } catch (err) {
      alert("An error occurred. Please try again.");
      setErrorMessage(err);
      console.error(err);
      setInput("");
      setLoader(false);
    }
  };
  

  const handleClick = () => {
    fetchData();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', 
    });
  };


  

  return (
    <div className="min-h-screen m-10 flex flex-col items-center md:mt-32">
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="max-w-md text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Go beyond link shortening</h1>
          <p className="text-slate-700 text-lg md:w-full lg:w-[30rem] tracking-wide">
            Our platform offers advanced analytics and branding features, ensuring a powerful and strategic online presence.
          </p>
        </div>
        <img src={Image} alt="hero" className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] ml-0 md:ml-36 mt-16 sm:mt-0" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 mt-10 md:w-[24rem]">
        <input
          type="text"
          placeholder="Enter your link here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-blue-500 rounded p-2 mb-4"
        />

        <Button onClick={handleClick} >Shorten it!</Button>
        {loader ? <p className="mt-4">Loading...</p> : <p className="text-blue-500 mt-4">{result}</p>}
        {error != null ? "" : <p>{error}</p>}
      </div>
    </div>
  );
}
