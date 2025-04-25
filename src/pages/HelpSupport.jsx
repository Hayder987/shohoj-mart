import React, { useEffect, useState } from "react";
import PageMargin from "../components/common/PageMargin";
import Faq from "../components/Faqs/Faq";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { IoIosChatboxes } from "react-icons/io";

const HelpSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Helmet>
        <title>FAQ || shohojmart</title>
      </Helmet>
      <PageMargin />
      <div className="container mx-auto py-10">
        <h1 className="text-center text-3xl md:text-5xl mb-10 lg:mb-12 font-bold text-[#0A2C8C]">
          Frequently Asked Questions
        </h1>
        <div className="px-4">
          <Faq />
        </div>
      </div>
      <Link to={"/chat"}>
          <div className="relative">
            <div
              className={` w-16 h-16 flex justify-center items-center rounded-full border-2 bg-blue-700 border-blue-700 fixed z-20 bottom-16 md:bottom-24 right-6 lg:right-14`}
            >
              <p className="text-5xl text-white"><IoIosChatboxes /></p>
              <div className={"flex fixed bottom-[60px] duration-300   py-1 px-4 rounded-lg"}>
              </div>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default HelpSupport;
