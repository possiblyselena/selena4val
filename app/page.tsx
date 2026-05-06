import Image from "next/image";

import Introduction from "./components/intro";
import Communnity from "./components/community";
import Valedictorian from "./components/whyval";
import ThankYou from "./components/thankyou";

export default function Home() {

  let pageNumber = 1;

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
              <Introduction />
            )} {pageNumber === 2 && (
              <Communnity />
            )} {pageNumber === 3 && (
              <Valedictorian />
            }
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
