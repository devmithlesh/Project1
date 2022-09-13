import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <div className="w-full h-screen bg-black overflow-hidden absolute top-0 left-0">
        <h2 className="mt-32 text-gray-100">Page Not Found</h2>
        <div className="flex justify-center w-full my-10">
          <Link to="/" className="text-gray-100 font-bold">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NoMatch;
