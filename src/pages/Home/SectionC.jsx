import React from "react";

const SectionC = () => {
  return (
    <section className="sectionC w-full p-16 pb-48 relative">
      <div className="absolute inset-0 z-0 bg-black"></div>
      <div className="content z-10 relative grid gap-x-5 gap-y-10 grid-rows-[1fr_7fr]">
        <div className="row-span-1 col-span-4">
          <h2 className="text-white font-serif text-5xl">Section C</h2>
        </div>
        <div className="">
          <div className="flex flex-col border-2 w-full h-auto">
            <div className="flex pl-2 items-center border-b-2 h-24">
              <h3 className="text-white font-sans text-xl">Big Digital Crypto Marketing</h3>
            </div>
            <div className="border-b-2">
                <img className="w-auto h-auto" src="https://loremflickr.com/300/200"></img>
            </div>
            <div className="p-5">
                <p className="text-white font-sans">Leverage cutting-edge strategies to maximize exposure and engagement for your crypto projects.</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col border-2 w-full h-auto">
            <div className="flex pl-2 items-center border-b-2 h-24">
              <h3 className="text-white font-sans text-xl">Big Liquidity Service</h3>
            </div>
            <div className="border-b-2">
                <img className="w-auto h-auto" src="https://loremflickr.com/300/200"/>
            </div>
            <div className="p-5">
                <p className="text-white font-sans">Ensure seamless trading experiences with robust liquidity solutions tailored to your needs.</p>
            </div>
          </div>
        </div>
        <div className="mt-40">
          <div className="flex flex-col border-2 w-full h-auto">
            <div className="flex pl-2 items-center border-b-2 h-24">
              <h3 className="text-white font-sans text-xl">High Volume of Block Deal</h3>
            </div>
            <div className="border-b-2">
                <img className="w-auto h-auto" src="https://loremflickr.com/300/200"/>
            </div>
            <div className="p-5">
                <p className="text-white font-sans">Facilitate large-scale transactions efficiently and securely for institutional and individual investors.</p>
            </div>
          </div>
        </div>
        <div className="mt-60">
          <div className="flex flex-col border-2 w-full h-auto">
            <div className="flex pl-2 items-center border-b-2 h-24">
              <h3 className="text-white font-sans text-xl">Market Maker Service</h3>
            </div>
            <div className="border-b-2">
                <img className="w-auto h-auto" src="https://loremflickr.com/300/200"/>
            </div>
            <div className="p-5">
                <p className="text-white font-sans">Provide continuous liquidity and stabilize prices, enhancing market efficiency and trading volumes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionC;
