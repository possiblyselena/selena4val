'use client';
import Image from "next/image";
import { useState } from "react";

import Introduction from "./components/intro";
import Community from "./components/community";
import Valedictorian from "./components/whyval";
import ThankYou from "./components/thankyou";

export default function Home() {

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="bg-linear-to-r from-white to-highlight min-h-screen">
      <div className="bg-border flex items-center justify-center p-8 m-45">
        <div>
          <div className="grid grid-cols-2 gap-270 mb-8">
            <p>UserName</p>
            <p className="bg-gray-500">x</p>
          </div>
          <div className="bg-white">
            {pageNumber === 1 && (
              <Introduction setPageNumber={setPageNumber} />
            )} {pageNumber === 2 && (
              <Community setPageNumber={setPageNumber} />
            )} {pageNumber === 3 && (
              <Valedictorian setPageNumber={setPageNumber} />
            )} {pageNumber === 4 && (
              <ThankYou setPageNumber={setPageNumber} />
            )}
          </div>
        </div>
      </div>
      <div>
        <h1>Please Click the Button Below if you like my work and support my Journey!</h1>
        <button className="bg-border text-foreground px-15 py-2 rounded-lg">Vote!</button>
      </div>
    </div>
  );
}
