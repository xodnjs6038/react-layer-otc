import React from "react";
import { motion } from "framer-motion";

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
              <motion.span 
              className="relative text-red-700 inline-block" 
              initial={{ scale: 1 }} 
              whileHover={{ scale: 1.2 }} 
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
              >
                &#123;Listing&#125; &#123;Marketing&#125; &#123;Blockchain Deal&#125; &#123; &gt;&gt; &#125;
                <motion.div
                className="absolute left-0 bottom-0 bg-red-700 h-px w-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                >
                </motion.div>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
