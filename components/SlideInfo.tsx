import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { VscRuby } from "react-icons/vsc";
import { Data, CurrentSlideData } from "@/pages";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" " />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-2">
        <button title='Thank you for visiting this page! Astrum Stellar :)'
          className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-yellow-600 text-xs  transition 
            duration-300 ease-in-out hover:opacity-20 "
        >
          <VscRuby className=" text-x4" />
        </button>
        <button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        >
          DISCOVER MORE ART
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;