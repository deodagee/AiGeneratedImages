import styles from '@/styles/index.module.css';
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
import {sliderData} from "@/components/sliderdata"


export type Data = {
  img: string;
  name: string;
  role: string;
  features: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export type DisplayImage = { 
  img: string;
  index: number;
};

export default function Home() {


  const initData = sliderData[0];

  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  const [frontimage, setFrontImage] = React.useState<DisplayImage>({
    img: initData.img,
    index: 0,
  });

  React.useEffect(() => {
    setFrontImage({
      img: currentSlideData.data.img,
      index: currentSlideData.index,
    });
  }, [currentSlideData]);

  return (
    <div className="  ">
    <div className={styles.pagefonts}>
      <main
        key={"component1"}
        className={`landscape:overflow-x-clip landscape:max-h-screen landscape:relative component1_child relative min-h-screen select-none overflow-y-clip text-white antialiased`}
      >
        <AnimatePresence>
          <BackgroundImage
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />
          <div key={"element_Header"} className=" absolute z-20 h-full w-full">
            <Header />

            <div
              key={"element_Header_Wrapper"}
              className=" landscape:overflow-y-scroll  landscape:overflow-x-clip landscape:pb-20 flex h-full w-full grid-cols-10 flex-col md:grid"
            >
              <div
                key={"element_Header_Child1"}
                className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-0 md:mb-0 md:justify-center md:px-10"
              >
                
                <img
                className={styles.frontimage}
                src={transitionData.img}
                alt="frontimage"
              />
                <SlideInfo
                  transitionData={transitionData}
                  currentSlideData={currentSlideData}
                />
                
              </div>
              

              <div
              
                key={"element_Header_Slides"}
                className="col-span-6 flex h-full flex-1 flex-col justify-start p-5 pb-20 md:justify-center md:p-5 mb-9 overflow-x-clip overflow-y-scroll"              >
              <div className={styles.upnext}> Up Next..</div>

                <Slides data={data} />

                <Controls
                  currentSlideData={currentSlideData}
                  data={data}
                  transitionData={transitionData}
                  initData={initData}
                  handleData={setData}
                  handleTransitionData={setTransitionData}
                  handleCurrentSlideData={setCurrentSlideData}
                  sliderData={sliderData}
                />
              </div>
            </div>
          </div>
        </AnimatePresence>

      </main>

    </div>
    </div>
  );
}

