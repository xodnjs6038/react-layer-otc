import React from "react";

const SectionB = () => {
  return (
    <section className="p-16 pb-40 relative">
        <div className="absolute inset-0 z-0 bg-black bg-grid-pattern bg-grid-size"></div>
      <div className="content z-10 relative grid gap-y-20">
        <div className="">
          <h2 className="text-white font-serif text-5xl">Section B</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <div className="">
            <img className="" src="https://loremflickr.com/600/400" alt="Section A" />
          </div>
          <div className="">
            <p className="text-white font-serif text-xl">This is the content of Section B.</p>
            <div className="mt-20">
            <span className="text-red-600">(Listing) (Marketing) (Blockchain Deal) (&gt;&gt;)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
