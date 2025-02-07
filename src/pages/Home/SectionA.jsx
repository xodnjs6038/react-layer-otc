import React from "react";

const SectionA = () => {
  return (
    <section className="section-a w-full">
      <div className="px-16 pb-16 grid grid-rows-[3fr_1fr] grid-cols-[3fr_7fr]">
        <div className="pb-8 row-span-1 col-span-2">
          <img className="w-auto h-auto" src="https://loremflickr.com/600/400" alt="Section A" />
        </div>
        <div className="row-span-1 col-span-1 flex items-center">
          <h2 className="font-serif text-5xl">Section A</h2>
        </div>
        <div className="row-span-1 col-span-1 flex items-center p-4">
          <p className="font-serif text-xl">This is the content of Section A.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionA;
